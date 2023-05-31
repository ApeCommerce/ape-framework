import { jwtVerify, JWTPayload, ProtectedHeaderParameters as Header, SignJWT } from 'jose';
import config from './config';
import log from '../log';

export interface Auth {
  id: string,
  roles: string[],
}

interface Payload extends JWTPayload {
  type: string,
  auth: Auth,
}

const secret = new TextEncoder().encode(config.secret);

export const createToken = async (auth: Auth, type: string, timestamp: number, expiration: number) => {
  const payload: Payload = {
    type,
    auth,
  };
  return new SignJWT(payload)
    .setProtectedHeader({ typ: 'JWT', alg: 'HS256' })
    .setIssuer(config.issuer)
    .setIssuedAt(timestamp)
    .setExpirationTime(timestamp + expiration)
    .sign(secret);
};

export const verifyToken = async (token: string, type: string, timestamp: number) => {
  try {
    const { payload } = (await jwtVerify(token, secret, {
      algorithms: ['HS256'],
      issuer: config.issuer,
      currentDate: new Date(timestamp * 1000),
    })) as { payload: Payload, protectedHeader: Header };
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
