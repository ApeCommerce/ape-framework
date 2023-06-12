import { FastifyPluginCallback as Plugin } from 'fastify';
import { getBundles } from '../boot';
import schema from './schema';

const protectedRoutes: { path: string, roles: string[] }[] = [];

export const getRequiredRoles = (path: string) => protectedRoutes.find((route) => route.path === path)?.roles;

const router: Plugin = async (server, options, done) => {
  (await getBundles()).forEach((bundle) => {
    (bundle.routes || []).forEach((route) => {
      if (route.endpoint.requiredRoles) {
        protectedRoutes.push({
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

export default router;
