import bcrypt from 'bcrypt';
import config from 'pwd/config';

const hashPassword = (password: string) => bcrypt.hash(password, config.hashCost);
const verifyPassword = (password: string, hash: string) => bcrypt.compare(password, hash);

export default {
  hashPassword,
  verifyPassword,
};
