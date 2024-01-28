import { ParserInputError } from './error/ParserInputError'
import { parseNumber } from './parseNumber'
import type { Parser } from './Parser'

const parseInteger: Parser<number> = (input) => {
  const number = parseNumber(input)
  if (!Number.isSafeInteger(number)) {
    throw new ParserInputError('integer')
  }
  return number
}

export {
  parseInteger,
}
