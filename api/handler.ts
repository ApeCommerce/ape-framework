import { FastifyError as Error, FastifyReply as Reply, FastifyRequest } from 'fastify';
import { User } from '../jwt';

export type Handler = (request: Request, reply: Reply) => Promise<void>;
export type ErrorHandler = (error: Error, request: Request, reply: Reply) => Promise<void>;

export interface Request extends FastifyRequest { user?: User }

export const sendReply = (reply: Reply, value: unknown = true) => {
  if (value === true) {
    reply.send();
  } else if (value === false) {
    reply.status(403).send();
  } else {
    reply.send(value);
  }
};
