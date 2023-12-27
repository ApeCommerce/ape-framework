import dotenv from 'dotenv'
import { parseString } from '../utils'

dotenv.config()

export default {
  env: parseString(process.env.NODE_ENV),
  path: parseString(process.env.NODE_PATH),
}
