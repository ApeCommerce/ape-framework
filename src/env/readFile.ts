import dotenv from 'dotenv'
import fs from 'fs-extra'
import { EnvFileReadError } from './error/EnvFileReadError'
import type { Env } from './Env'

const readFile = (path: string, required = false): Env => {
  let fileExists: boolean
  let env: Env = {}
  try {
    fileExists = fs.existsSync(path)
    if (fileExists) {
      env = dotenv.parse(fs.readFileSync(path))
    }
  } catch (error) {
    throw new EnvFileReadError(path, (error as Error).message)
  }
  if (required && !fileExists) {
    throw new EnvFileReadError(path, 'missing file')
  }
  return env
}

export {
  readFile,
}
