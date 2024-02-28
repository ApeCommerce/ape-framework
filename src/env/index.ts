import dotenv from 'dotenv'
import type { Env } from './Env'

dotenv.config()

const env: Env = process.env

export {
  env,
}
