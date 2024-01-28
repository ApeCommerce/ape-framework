import { ParserInputError } from '../../error/ParserInputError'
import { parseNumber } from '../../parseNumber'
import { parseString } from '../../parseString'
import type { Unit } from './Unit'
import type { Parser } from '../../Parser'

const parseUnit = (type: string, units: Unit[]): Parser<number> => {
  return (input) => {
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
      throw new ParserInputError(type)
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
      throw new ParserInputError(type)
    }
    return number
  }
}

export {
  parseUnit,
}
