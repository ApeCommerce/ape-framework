import { ParserInputError } from 'parser/error/ParserInputError'
import { parseInteger } from 'parser/parseInteger'

describe('parsing an integer', () => {
  test('returns expected value', async () => {
    expect(parseInteger(undefined)).toBe(0)

    expect(parseInteger(null)).toBe(0)

    expect(parseInteger(false)).toBe(0)

    expect(parseInteger(true)).toBe(1)

    expect(() => {
      parseInteger(-3.5)
    }).toThrow(ParserInputError)

    expect(parseInteger(-1)).toBe(-1)

    expect(parseInteger(0)).toBe(0)

    expect(parseInteger(1)).toBe(1)

    expect(() => {
      parseInteger(3.5)
    }).toThrow(ParserInputError)

    expect(parseInteger(BigInt(-3))).toBe(-3)

    expect(parseInteger(BigInt(-1))).toBe(-1)

    expect(parseInteger(BigInt(0))).toBe(0)

    expect(parseInteger(BigInt(1))).toBe(1)

    expect(parseInteger(BigInt(3))).toBe(3)

    expect(parseInteger('')).toBe(0)

    expect(() => {
      parseInteger('foo')
    }).toThrow(ParserInputError)

    expect(() => {
      parseInteger('-3.5')
    }).toThrow(ParserInputError)

    expect(parseInteger('-1')).toBe(-1)

    expect(parseInteger('0')).toBe(0)

    expect(parseInteger('1')).toBe(1)

    expect(() => {
      parseInteger('3.5')
    }).toThrow(ParserInputError)

    expect(() => {
      parseInteger({})
    }).toThrow(ParserInputError)

    expect(() => {
      parseInteger([])
    }).toThrow(ParserInputError)

    expect(() => {
      parseInteger(() => { })
    }).toThrow(ParserInputError)

    expect(() => {
      parseInteger(Symbol('foo'))
    }).toThrow(ParserInputError)
  })
})
