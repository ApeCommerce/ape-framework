import { BaseError } from '../../error/BaseError'

class ConfigParseError extends BaseError {
  public constructor(property: string, source: string, message: string) {
    super(`failed parsing property "${property}" from ${source}: ${message}`)
  }
}

export {
  ConfigParseError,
}
