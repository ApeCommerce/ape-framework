import { BaseError } from '../../error/BaseError'

class EnvFileReadError extends BaseError {
  public constructor(path: string, message: string) {
    super(`failed reading environment file "${path}": ${message}`)
  }
}

export {
  EnvFileReadError,
}
