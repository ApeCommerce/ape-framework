import { basePath, timestamp } from 'utils';
import { Endpoint } from 'common/framework/endpoint';
import { getBundles } from 'boot';
import config from 'api/config';
import cors from '@fastify/cors';
import fastify, { FastifyError, FastifyInstance, FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';
import jwt, { Auth } from 'jwt';
import log from 'log';
import responseValidation from '@fastify/response-validation';
import schema from 'api/schema';
import swagger from '@fastify/swagger';

export interface Server extends FastifyInstance { }
export interface Plugin extends FastifyPluginCallback { }
export interface Route { endpoint: Endpoint, handler: Handler }
export interface Request extends FastifyRequest { auth?: Auth }
export interface Reply extends FastifyReply { }
export interface Error extends FastifyError { }

export type Handler = (request: Request, reply: Reply) => Promise<void>;
export type ErrorHandler = (error: Error, request: Request, reply: Reply) => Promise<void>;

export const authorizationTokenType = 'authorization';

const authorizationRegex = /^Bearer [0-9A-Za-z]+\.[0-9A-Za-z]+\.[0-9A-Za-z-_]+$/;
const bearerPrefixLength = 'Bearer '.length;

const routeAuth: { path: string, roles: string[] }[] = [];
const routeRoles = (path: string) => routeAuth.find((route) => route.path === path)?.roles;

const onRequest: Handler = async (request, reply) => {
  const roles = routeRoles(basePath(request.routerPath));
  if (roles) {
    let authorized = false;
    if (request.headers.authorization && request.headers.authorization.match(authorizationRegex)) {
      const auth = jwt.verifyToken(
        request.headers.authorization.substring(bearerPrefixLength),
        authorizationTokenType,
        timestamp(),
      );
      if (auth && jwt.hasRoles(auth, roles)) {
        authorized = true;
        request.auth = auth;
      }
    }
    if (!authorized) {
      reply.status(401).send();
    }
  }
};

const onResponse: Handler = async (request, reply) => {
  log.debug(
    `API: ${request.method} ${basePath(request.url, '?')} ${reply.statusCode} ${reply.getResponseTime().toFixed(0)}ms`,
  );
};

const onTimeout: Handler = async (request) => {
  log.error(`API: ${request.method} ${request.routerPath} TIMEOUT ${config.serverOptions.connectionTimeout}ms`);
};

const notFoundHandler: Handler = async (request, reply) => {
  reply.status(404).send();
};

const errorHandler: ErrorHandler = async (error, request, reply) => {
  const status = error.statusCode || 500;
  reply.status(status).send();
  if (status === 400) {
    log.debug(error);
  } else {
    log.error(error);
  }
};

const router: Plugin = async (server, options, done) => {
  (await getBundles()).forEach((bundle) => {
    bundle.routes.forEach((route) => {
      if (route.endpoint.requiredRoles) {
        routeAuth.push({
          path: route.endpoint.path,
          roles: route.endpoint.requiredRoles,
        });
      }
      server.route({
        url: route.endpoint.path,
        method: route.endpoint.method,
        schema: schema(bundle, route.endpoint),
        handler: route.handler,
      });
    });
  });
  done();
};

export const sendReply = (reply: Reply, value: unknown = true) => {
  if (value === true) {
    reply.send();
  } else if (value === false) {
    reply.status(403).send();
  } else {
    reply.send(value);
  }
};

class Api {
  private server: Server;

  private url?: string;

  constructor() {
    this.server = fastify(config.serverOptions)
      .addHook('onRequest', onRequest)
      .addHook('onResponse', onResponse)
      .addHook('onTimeout', onTimeout)
      .setNotFoundHandler(notFoundHandler)
      .setErrorHandler(errorHandler)
      .register(cors, config.corsOptions)
      .register(swagger, config.swaggerOptions)
      .register(responseValidation, config.responseValidationOptions)
      .register(router);
  }

  getUrl() {
    return this.url;
  }

  doc() {
    return this.server.swagger();
  }

  async start() {
    this.url = await this.server.listen(config.listenOptions);
    log.info(`API: started v${config.version} ${this.url}`);
  }

  async close() {
    await this.server.close();
    log.info('API: closed');
  }
}

export default new Api();
