import cors from '@fastify/cors'
import fastify from 'fastify'
import responseValidation from '@fastify/response-validation'
import swagger from '@fastify/swagger'
import { timestamp } from '../utils'
import { bearerPrefix, headerRegex, tokenType } from './auth'
import { hasRoles, verifyToken } from '../jwt'
import config from './config'
import log from '../log'
import router, { getRequiredRoles } from './router'
import type { Api } from './api'
import type { ErrorHandler, Handler } from './handler'

export const basePath = (path?: string, separator = '/') => {
  return (path || '').split(separator).filter((value) => value)[0] || ''
}

const onRequest: Handler = async (request, reply) => {
  const roles = getRequiredRoles(basePath(request.routerPath))
  if (roles) {
    let authorized = false
    if (request.headers.authorization?.match(headerRegex)) {
      const user = await verifyToken(
        request.headers.authorization.substring(bearerPrefix.length),
        tokenType,
        timestamp(),
      )
      if (user && hasRoles(user, roles)) {
        authorized = true
        request.user = user
      }
    }
    if (!authorized) {
      reply.status(401).send()
    }
  }
}

const onResponse: Handler = async (request, reply) => {
  log.debug([
    `api: ${request.method} ${basePath(request.url, '?')}`,
    `${reply.statusCode} ${reply.getResponseTime().toFixed(0)}ms`,
  ].join(' '))
}

const onTimeout: Handler = async (request) => {
  log.error([
    `api: ${request.method} ${request.routerPath}`,
    `timeout ${config.serverOptions.connectionTimeout}ms`,
  ].join(' '))
}

const notFoundHandler: Handler = async (request, reply) => {
  reply.status(404).send()
}

const errorHandler: ErrorHandler = async (error, request, reply) => {
  const status = error.statusCode ?? 500
  reply.status(status).send()
  if (status === 400) {
    log.debug(error)
  } else {
    log.error(error)
  }
}

const server = fastify(config.serverOptions)
  .addHook('onRequest', onRequest)
  .addHook('onResponse', onResponse)
  .addHook('onTimeout', onTimeout)
  .setNotFoundHandler(notFoundHandler)
  .setErrorHandler(errorHandler)
  .register(cors, config.corsOptions)
  .register(swagger, config.swaggerOptions)
  .register(responseValidation, config.responseValidationOptions)
  .register(router)

let url: string

export const start = async () => {
  url = await server.listen(config.listenOptions)
  log.info(`api: started v${config.version} @${url}`)
}

export const close = async () => {
  await server.close()
  log.info('api: closed')
}

export const getUrl = () => url

export const doc = () => server.swagger()

const api: Api = {
  start,
  close,
  getUrl,
  doc,
}

export default api
