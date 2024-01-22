import { ParserInputError, parseBoolean } from 'parser'

describe('parsing a boolean', () => {
  test('returns expected value', async () => {
    expect(parseBoolean(undefined)).toBe(false)

    expect(parseBoolean(null)).toBe(false)

    expect(parseBoolean(false)).toBe(false)

    expect(parseBoolean(true)).toBe(true)

    expect(() => {
      parseBoolean(-3.5)
    }).toThrow(ParserInputError)

    expect(() => {
      parseBoolean(-1)
    }).toThrow(ParserInputError)

    expect(parseBoolean(0)).toBe(false)

    expect(parseBoolean(1)).toBe(true)

    expect(() => {
      parseBoolean(3.5)
    }).toThrow(ParserInputError)

    expect(parseBoolean('')).toBe(false)

    expect(() => {
      parseBoolean('foo')
    }).toThrow(ParserInputError)

    expect(() => {
      parseBoolean('-3.5')
    }).toThrow(ParserInputError)

    expect(() => {
      parseBoolean('-1')
    }).toThrow(ParserInputError)

    expect(parseBoolean('0')).toBe(false)

    expect(parseBoolean('1')).toBe(true)

    expect(() => {
      parseBoolean('3.5')
    }).toThrow(ParserInputError)

    expect(() => {
      parseBoolean({})
    }).toThrow(ParserInputError)

    expect(() => {
      parseBoolean([])
    }).toThrow(ParserInputError)

    expect(() => {
      parseBoolean(() => { })
    }).toThrow(ParserInputError)
  })
})
