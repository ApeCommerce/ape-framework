import { BaseError } from '../error/BaseError'

class ParserInputError extends BaseError {
  public constructor(type: string) {
    super(`parsing ${type}: bad input value`)
  }
}

export {
  ParserInputError,
}
