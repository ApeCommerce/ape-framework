import '../env'
import { parseString } from '../utils'

const node = {
  env: parseString(process.env.NODE_ENV),
  path: parseString(process.env.NODE_PATH),
}

export {
  node,
}
