import bcrypt from 'bcrypt';
import { Pwd } from './pwd';
import config from './config';

export { Pwd };

export const hashPassword = (password: string) => bcrypt.hash(password, config.hashCost);
export const verifyPassword = (password: string, hash: string) => bcrypt.compare(password, hash);

const pwd: Pwd = {
  hashPassword,
  verifyPassword,
};

export default pwd;
