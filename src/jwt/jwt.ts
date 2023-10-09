import { User } from './user';

export interface Jwt {
  createToken: (user: User, type: string, timestamp: number, expiration: number) => Promise<string>,
  hasRoles: (user: User, roles: string[]) => boolean,
  verifyToken: (token: string, type: string, timestamp: number) => Promise<User | undefined>,
}
