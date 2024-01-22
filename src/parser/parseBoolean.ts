import { ParserInputError } from './ParserInputError'
import type { Parser } from './Parser'

const parseBoolean: Parser<boolean> = (input) => {
  if ([true, 1, '1'].includes(input)) {
    return true
  } else if ([undefined, null, false, 0, '0', ''].includes(input)) {
    return false
  }
  throw new ParserInputError('boolean')
}

export {
  parseBoolean,
}
