import { ParserInputError } from 'parser/error/ParserInputError'
import { parseString } from 'parser/parseString'

describe('parsing a string', () => {
  test('returns expected value', async () => {
    expect(parseString(undefined)).toBe('')

    expect(parseString(null)).toBe('')

    expect(parseString(false)).toBe('0')

    expect(parseString(true)).toBe('1')

    expect(parseString(-3.5)).toBe('-3.5')

    expect(parseString(-1)).toBe('-1')

    expect(parseString(0)).toBe('0')

    expect(parseString(1)).toBe('1')

    expect(parseString(3.5)).toBe('3.5')

    expect(parseString(BigInt(-3))).toBe('-3')

    expect(parseString(BigInt(-1))).toBe('-1')

    expect(parseString(BigInt(0))).toBe('0')

    expect(parseString(BigInt(1))).toBe('1')

    expect(parseString(BigInt(3))).toBe('3')

    expect(parseString('')).toBe('')

    expect(parseString('foo')).toBe('foo')

    expect(parseString('-3.5')).toBe('-3.5')

    expect(parseString('-1')).toBe('-1')

    expect(parseString('0')).toBe('0')

    expect(parseString('1')).toBe('1')

    expect(parseString('3.5')).toBe('3.5')

    expect(() => {
      parseString({})
    }).toThrow(ParserInputError)

    expect(() => {
      parseString([])
    }).toThrow(ParserInputError)

    expect(() => {
      parseString(() => { })
    }).toThrow(ParserInputError)

    expect(() => {
      parseString(Symbol('foo'))
    }).toThrow(ParserInputError)
  })
})
