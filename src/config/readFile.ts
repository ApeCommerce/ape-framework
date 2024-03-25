import fs from 'fs-extra'
import { ConfigFileReadError } from './error/ConfigFileReadError'

const readFile = (path: string, required = false): Record<string, any> => {
  let fileExists: boolean
  let json: any = {}
  try {
    fileExists = fs.existsSync(path)
    if (fileExists) {
      json = fs.readJsonSync(path)
    }
  } catch (error) {
    throw new ConfigFileReadError(path, (error as Error).message)
  }
  if (required && !fileExists) {
    throw new ConfigFileReadError(path, 'missing file')
  }
  if (
    fileExists && (
      typeof json !== 'object'
      || Array.isArray(json)
      || json === null
    )
  ) {
    throw new ConfigFileReadError(path, 'invalid content')
  }
  return json as Record<string, any>
}

export {
  readFile,
}
