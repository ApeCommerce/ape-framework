import { parseString } from '../utils'
import env from './env'

export default {
  env: parseString(env.nodeEnv),
  path: parseString(env.nodePath),
}
