import bcrypt from 'bcrypt'
import config from './config'
import type { Pwd } from './pwd'

export { Pwd }

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, config.hashCost)
}

export const verifyPassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash)
}

const pwd: Pwd = {
  hashPassword,
  verifyPassword,
}

export default pwd
