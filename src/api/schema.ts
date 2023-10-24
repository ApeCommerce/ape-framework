import { bodyMethods, querystringMethods, Endpoint } from './endpoint';
import type { Bundle } from '../app';

interface RouteSchema {
  tags: string[],
  summary: string,
  description?: string,
  headers?: ObjectSchema,
  querystring?: ObjectSchema,
  body?: ObjectSchema,
  response: {
    200: NullSchema | ObjectSchema,
    400?: NullSchema,
    401?: NullSchema,
    403?: NullSchema,
  },
}

interface NullSchema {
  type: 'null',
  description?: string,
}

interface ObjectSchema {
  type: 'object',
  additionalProperties: false,
  required: string[],
  properties: any,
  description?: string,
}

const nullSchema: NullSchema = {
  type: 'null',
};

const authSchema = (roles: string[]): ObjectSchema => ({
  type: 'object',
  additionalProperties: false,
  required: ['authorization'],
  properties: {
    authorization: {
      type: 'string',
      pattern: '^Bearer [0-9A-Za-z]+\\.[0-9A-Za-z]+\\.[0-9A-Za-z-_]+$',
      description: `Required roles: \`${roles.join('`, `')}\``,
    },
  },
});

const schema = (bundle: Bundle, endpoint: Endpoint): RouteSchema => {
  const replySchema = endpoint.replySchema
    ? {
      ...endpoint.replySchema,
      examples: endpoint.replyExample ? [endpoint.replyExample] : undefined,
    }
    : nullSchema;

  const routeSchema: RouteSchema = {
    tags: [bundle.name],
    summary: endpoint.path,
    description: endpoint.description,
    response: { 200: { ...replySchema, description: 'OK' } },
  };

  if (endpoint.requestSchema) {
    if (querystringMethods.includes(endpoint.method)) {
      const { requestSchema } = endpoint;
      if (endpoint.requestExample) {
        Object.keys(requestSchema.properties).forEach((property) => {
          requestSchema.properties[property].examples = endpoint.requestExample[property]
            ? [endpoint.requestExample[property]]
            : undefined;
        });
      }
      routeSchema.querystring = requestSchema;
    }
    if (bodyMethods.includes(endpoint.method)) {
      const { requestSchema }: any = endpoint;
      if (endpoint.requestExample) {
        requestSchema.examples = [endpoint.requestExample];
      }
      routeSchema.body = requestSchema;
    }
    routeSchema.response[400] = { ...nullSchema, description: 'Bad Request' };
  }

  if (endpoint.requiredRoles) {
    routeSchema.headers = authSchema(endpoint.requiredRoles);
    routeSchema.response[401] = { ...nullSchema, description: 'Unauthorized' };
  }

  if (endpoint.forbidden) {
    routeSchema.response[403] = { ...nullSchema, description: 'Forbidden' };
  }

  return routeSchema;
};

export default schema;
