import { ParserInputError } from './error/ParserInputError'
import type { Parser } from './Parser'

const parseNumber: Parser<number> = (input) => {
  if ([undefined, null].includes(input)) {
    return 0
  } else if (['object', 'function', 'symbol'].includes(typeof input)) {
    throw new ParserInputError('number')
  }

  const number = Number(input)
  if (!Number.isFinite(number)) {
    throw new ParserInputError('number')
  }
  return number
}

export {
  parseNumber,
}
