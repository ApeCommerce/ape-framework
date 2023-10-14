import { FastifyCorsOptions as CorsOptions } from '@fastify/cors';
import { FastifyListenOptions as ListenOptions, FastifyServerOptions as ServerOptions } from 'fastify';
import { Options as ResponseValidationOptions } from '@fastify/response-validation';
import { SwaggerOptions } from '@fastify/swagger';
import { getConfig } from '../config';

const config = getConfig();

if (!config.apiName) throw new Error('api: name not provided');
if (!config.apiVersion) throw new Error('api: version not provided');
if (!config.apiHost) throw new Error('api: host not provided');
if (!config.apiPort) throw new Error('api: port not provided');
if (!config.apiConnectionTimeout) throw new Error('api: connection timeout not provided');
if (!config.apiRequestTimeout) throw new Error('api: request timeout not provided');
if (!config.apiKeepAliveTimeout) throw new Error('api: keep alive timeout not provided');
if (!config.apiBodyLimit) throw new Error('api: body limit not provided');

const listenOptions: ListenOptions = {
  host: config.apiHost,
  port: config.apiRandomPort ? undefined : config.apiPort,
};

const serverOptions: ServerOptions = {
  connectionTimeout: config.apiConnectionTimeout,
  requestTimeout: config.apiRequestTimeout,
  keepAliveTimeout: config.apiKeepAliveTimeout,
  bodyLimit: config.apiBodyLimit,
};

const corsOptions: CorsOptions = {};

const swaggerOptions: SwaggerOptions = {
  openapi: {
    info: {
      title: `${config.apiName} API Documentation`,
      version: config.apiVersion,
    },
  },
};

const responseValidationOptions: ResponseValidationOptions = {
  responseValidation: config.apiResponseValidation,
};

export default {
  name: config.apiName,
  version: config.apiVersion,
  listenOptions,
  serverOptions,
  corsOptions,
  swaggerOptions,
  responseValidationOptions,
};
