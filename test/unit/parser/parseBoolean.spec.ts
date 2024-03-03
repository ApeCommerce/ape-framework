import { ParserInputError } from 'parser/error/ParserInputError'
import { parseBoolean } from 'parser/parseBoolean'

describe('parsing a boolean', () => {
  test('returns expected value', async () => {
    expect(parseBoolean(undefined)).toBe(false)

    expect(parseBoolean(null)).toBe(false)

    expect(parseBoolean(false)).toBe(false)

    expect(parseBoolean(true)).toBe(true)

    expect(() => {
      parseBoolean(-3.5)
    }).toThrow(new ParserInputError('boolean'))

    expect(() => {
      parseBoolean(-1)
    }).toThrow(new ParserInputError('boolean'))

    expect(parseBoolean(0)).toBe(false)

    expect(parseBoolean(1)).toBe(true)

    expect(() => {
      parseBoolean(3.5)
    }).toThrow(new ParserInputError('boolean'))

    expect(() => {
      parseBoolean(BigInt(-3))
    }).toThrow(new ParserInputError('boolean'))

    expect(() => {
      parseBoolean(BigInt(-1))
    }).toThrow(new ParserInputError('boolean'))

    expect(parseBoolean(BigInt(0))).toBe(false)

    expect(parseBoolean(BigInt(1))).toBe(true)

    expect(() => {
      parseBoolean(BigInt(3))
    }).toThrow(new ParserInputError('boolean'))

    expect(parseBoolean('')).toBe(false)

    expect(() => {
      parseBoolean('foo')
    }).toThrow(new ParserInputError('boolean'))

    expect(() => {
      parseBoolean('-3.5')
    }).toThrow(new ParserInputError('boolean'))

    expect(() => {
      parseBoolean('-1')
    }).toThrow(new ParserInputError('boolean'))

    expect(parseBoolean('0')).toBe(false)

    expect(parseBoolean('1')).toBe(true)

    expect(() => {
      parseBoolean('3.5')
    }).toThrow(new ParserInputError('boolean'))

    expect(() => {
      parseBoolean({})
    }).toThrow(new ParserInputError('boolean'))

    expect(() => {
      parseBoolean([])
    }).toThrow(new ParserInputError('boolean'))

    expect(() => {
      parseBoolean(() => { })
    }).toThrow(new ParserInputError('boolean'))

    expect(() => {
      parseBoolean(Symbol('foo'))
    }).toThrow(new ParserInputError('boolean'))
  })
})
