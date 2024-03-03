import dotenv from 'dotenv'
import type { Env } from 'env/Env'

const loadFile = (path: string, env: Env): void => {
  dotenv.config({ path, processEnv: env })
}

export {
  loadFile,
}
