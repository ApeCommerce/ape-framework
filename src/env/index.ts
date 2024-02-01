import dotenv from 'dotenv'
import type { Env } from './Env'

dotenv.config()

const env: Readonly<Env> = process.env

export {
  env,
}
