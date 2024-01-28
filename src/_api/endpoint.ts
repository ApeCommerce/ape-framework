export interface Endpoint {
  path: string,
  method: Method,
  requiredRoles?: string[],
  forbidden?: boolean,
  requestSchema?: Schema,
  replySchema?: Schema,
  description?: string,
  requestExample?: any,
  replyExample?: any,
}

export interface Schema {
  type: 'object',
  additionalProperties: false,
  required: string[],
  properties: any,
}

export type Method = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'

export const querystringMethods: Method[] = ['DELETE', 'GET']
export const bodyMethods: Method[] = ['PATCH', 'POST', 'PUT']
