import jwt from 'jsonwebtoken';
import config from './config';
import log from '../log';

interface Payload {
  iss: string,
  iat: number,
  exp: number,
  type: string,
  auth: Auth,
}

export interface Auth {
  id: string,
  roles: string[],
}

export const createToken = (auth: Auth, type: string, expiration: number, timestamp: number) => {
  const payload: Payload = {
    iss: config.issuer,
    iat: timestamp,
    exp: timestamp + expiration,
    type,
    auth,
  };
  return jwt.sign(payload, config.secret);
};

export const verifyToken = (token: string, type: string, timestamp: number) => {
  try {
    const payload = jwt.verify(token, config.secret, {
      clockTimestamp: timestamp,
      issuer: config.issuer,
    }) as Payload;
    return payload.type === type ? payload.auth : undefined;
  } catch (error) {
    log.debug(error);
    return undefined;
  }
};

export const hasRoles = (auth: Auth, roles: string[]) => roles.every((role) => auth.roles.includes(role));

export default {
  createToken,
  verifyToken,
  hasRoles,
};
