import { BaseError } from '../../error/BaseError'

class ParserInputError extends BaseError {
  public constructor(type: string) {
    super(`failed parsing ${type}: invalid input`)
  }
}

export {
  ParserInputError,
}
