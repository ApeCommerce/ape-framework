import { BaseError } from '../../error/BaseError'

class ConfigFileReadError extends BaseError {
  public constructor(path: string, message: string) {
    super(`failed reading configuration file "${path}": ${message}`)
  }
}

export {
  ConfigFileReadError,
}
