import bcrypt from 'bcrypt';
import config from './config';

export const hashPassword = (password: string) => bcrypt.hash(password, config.hashCost);
export const verifyPassword = (password: string, hash: string) => bcrypt.compare(password, hash);

export default {
  hashPassword,
  verifyPassword,
};
