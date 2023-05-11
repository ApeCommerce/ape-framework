import { FastifyCorsOptions as CorsOptions } from '@fastify/cors';
import { FastifyListenOptions as ListenOptions, FastifyServerOptions as ServerOptions } from 'fastify';
import { Options as ResponseValidationOptions } from '@fastify/response-validation';
import { SwaggerOptions } from '@fastify/swagger';
import config from 'config';
import env, { parseBytes, parseMilliseconds } from 'env';

const name = config.apiName;
const version = config.apiVersion;

const listenOptions: ListenOptions = {
  host: env.apiHost || '0.0.0.0',
  port: env.apiRandomPort ? undefined : env.apiPort || 3000,
};

const serverOptions: ServerOptions = {
  connectionTimeout: env.apiConnectionTimeout || parseMilliseconds('10s'),
  requestTimeout: env.apiRequestTimeout || parseMilliseconds('10s'),
  keepAliveTimeout: env.apiKeepAliveTimeout || parseMilliseconds('10s'),
  bodyLimit: env.apiBodyLimit || parseBytes('2kb'),
};

const corsOptions: CorsOptions = {};

const swaggerOptions: SwaggerOptions = {
  openapi: {
    info: {
      title: `${name} API Documentation`,
      version,
    },
  },
};

const responseValidationOptions: ResponseValidationOptions = {
  responseValidation: env.apiResponseValidation,
};

export default {
  name,
  version,
  listenOptions,
  serverOptions,
  corsOptions,
  swaggerOptions,
  responseValidationOptions,
};
