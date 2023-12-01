import type { FastifyPluginCallback as Plugin } from 'fastify'
import { getBundles } from '../app'
import schema from './schema'

const protectedRoutes: {
  path: string,
  roles: string[]
}[] = []

export const getRequiredRoles = (path: string) =>
  protectedRoutes.find((route) => route.path === path)?.roles

const router: Plugin = (server, options, done) => {
  (async () => {
    for (const bundle of await getBundles()) {
      (bundle.routes ? await bundle.routes() : []).forEach((route) => {
        if (route.endpoint.requiredRoles) {
          protectedRoutes.push({
            path: route.endpoint.path,
            roles: route.endpoint.requiredRoles,
          })
        }
        server.route({
          url: route.endpoint.path,
          method: route.endpoint.method,
          schema: schema(bundle, route.endpoint),
          handler: route.handler,
        })
      })
    }
    done()
  })()
}

export default router
