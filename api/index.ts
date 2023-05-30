import cors from '@fastify/cors';
import fastify from 'fastify';
import responseValidation from '@fastify/response-validation';
import swagger from '@fastify/swagger';
import { basePath, timestamp } from '../utils';
import { ErrorHandler, Handler } from './handler';
import config from './config';
import jwt from '../jwt';
import log from '../log';
import router, { getRequiredRoles } from './router';

export const authorizationTokenType = 'authorization';

const authorizationRegex = /^Bearer [0-9A-Za-z]+\.[0-9A-Za-z]+\.[0-9A-Za-z-_]+$/;
const bearerPrefixLength = 'Bearer '.length;

const onRequest: Handler = async (request, reply) => {
  const roles = getRequiredRoles(basePath(request.routerPath));
  if (roles) {
    let authorized = false;
    if (request.headers.authorization && request.headers.authorization.match(authorizationRegex)) {
      const auth = await jwt.verifyToken(
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

const server = fastify(config.serverOptions)
  .addHook('onRequest', onRequest)
  .addHook('onResponse', onResponse)
  .addHook('onTimeout', onTimeout)
  .setNotFoundHandler(notFoundHandler)
  .setErrorHandler(errorHandler)
  .register(cors, config.corsOptions)
  .register(swagger, config.swaggerOptions)
  .register(responseValidation, config.responseValidationOptions)
  .register(router);

let url: string;

export const getUrl = () => url;
export const doc = () => server.swagger();

export const start = async () => {
  url = await server.listen(config.listenOptions);
  log.info(`API: started v${config.version} @${url}`);
};

export const close = async () => {
  await server.close();
  log.info('API: closed');
};

export default {
  getUrl,
  doc,
  start,
  close,
};
