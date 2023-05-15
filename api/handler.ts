import { FastifyReply, FastifyRequest } from 'fastify';
import { Auth } from '../jwt';

export interface Request extends FastifyRequest { auth?: Auth }
export interface Reply extends FastifyReply { }

export type Handler = (request: Request, reply: Reply) => Promise<void>;

export const sendReply = (reply: Reply, value: unknown = true) => {
  if (value === true) {
    reply.send();
  } else if (value === false) {
    reply.status(403).send();
  } else {
    reply.send(value);
  }
};
