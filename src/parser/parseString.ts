import { ParserInputError } from './error/ParserInputError'
import type { Parser } from './Parser'

const parseString: Parser<string> = (input) => {
  if ([undefined, null].includes(input)) {
    return ''
  } else if (input === false) {
    return '0'
  } else if (input === true) {
    return '1'
  } else if (['object', 'function', 'symbol'].includes(typeof input)) {
    throw new ParserInputError('string')
  }
  let string: string
  try {
    string = String(input)
  } catch (error) {
    throw new ParserInputError('string')
  }
  return string
}

export {
  parseString,
}
