import { loadFile } from './loadFile'
import type { Env } from './Env'

const env = process.env as Env

loadFile('.env', env)

export {
  env,
}
