import { ParserInputError } from './error/ParserInputError'
import { parseNumber } from './parseNumber'
import type { Parser } from './Parser'

const parseInteger: Parser<number> = (input) => {
  let number: number
  try {
    number = parseNumber(input)
  } catch (error) {
    throw new ParserInputError('integer')
  }
  if (!Number.isSafeInteger(number)) {
    throw new ParserInputError('integer')
  }
  return number
}

export {
  parseInteger,
}
