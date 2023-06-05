import { jwtVerify, JWTPayload, ProtectedHeaderParameters as Header, SignJWT } from 'jose';
import config from './config';
import log from '../log';

export interface User {
  id: string,
  roles: string[],
}

interface Payload extends JWTPayload {
  type: string,
  user: User,
}

const secret = new TextEncoder().encode(config.secret);

export const createToken = async (user: User, type: string, timestamp: number, expiration: number) => {
  const payload: Payload = { type, user };
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
    return payload.type === type ? payload.user : undefined;
  } catch (error) {
    log.debug(error);
    return undefined;
  }
};

export const hasRoles = (user: User, roles: string[]) => roles.every((role) => user.roles.includes(role));

export default {
  createToken,
  verifyToken,
  hasRoles,
};
