import config from 'jwt/config';
import jwt from 'jsonwebtoken';
import log from 'log';

export interface Auth {
  id: string,
  roles: string[],
}

interface Payload {
  iss: string,
  iat: number,
  exp: number,
  type: string,
  auth: Auth,
}

const createToken = (auth: Auth, type: string, expiration: number, timestamp: number) => {
  const payload: Payload = {
    iss: config.issuer,
    iat: timestamp,
    exp: timestamp + expiration,
    type,
    auth,
  };
  return jwt.sign(payload, config.secret);
};

const verifyToken = (token: string, type: string, timestamp: number) => {
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

const hasRoles = (auth: Auth, roles: string[]) => roles.every((role) => auth.roles.includes(role));

export default {
  createToken,
  verifyToken,
  hasRoles,
};
