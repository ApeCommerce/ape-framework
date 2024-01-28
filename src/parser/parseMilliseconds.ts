import { ParserInputError } from './error/ParserInputError'
import { parseNumber } from './parseNumber'
import { parseString } from './parseString'
import type { Parser } from './Parser'

interface Unit {
  symbol: string,
  value: number,
}

const units: Unit[] = [
  {
    symbol: 'ms',
    value: 1,
  },
  {
    symbol: 's',
    value: 1000,
  },
  {
    symbol: 'm',
    value: 60000,
  },
  {
    symbol: 'h',
    value: 3600000,
  },
  {
    symbol: 'd',
    value: 86400000,
  },
]

const parseMilliseconds: Parser<number> = (input) => {
  const allUnits: Unit[] = []
  units.forEach((u) => {
    allUnits.push(u, { ...u, symbol: ` ${u.symbol}` })
  })
  allUnits.sort((a, b) => {
    return b.symbol.length - a.symbol.length
  })
  let string: string
  try {
    string = parseString(input)
  } catch (error) {
    throw new ParserInputError('milliseconds')
  }
  const unit = allUnits.find((u) => {
    return string.toUpperCase().endsWith(u.symbol.toUpperCase())
  })
  let number: number
  try {
    number = parseNumber(
      string.substring(0, string.length - (unit?.symbol.length || 0)),
    ) * (unit?.value || 1)
  } catch (error) {
    throw new ParserInputError('milliseconds')
  }
  return number
}

export {
  parseMilliseconds,
}
