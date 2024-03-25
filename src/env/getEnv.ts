import { readFile } from './readFile'
import type { Env } from './Env'
import type { Options } from './Options'

const getEnv = (options?: Options): Env => {
  let file: Env = {}
  if (options?.file) {
    file = readFile(
      options.file.path,
      options.file.required,
    )
  }
  return {
    ...file,
    ...process.env as Env,
  }
}

export {
  getEnv,
}
