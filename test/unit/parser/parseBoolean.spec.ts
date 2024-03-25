import { parseBoolean } from 'parser/parseBoolean'

describe('parsing a boolean', () => {
  test('returns expected value', async () => {
    expect(parseBoolean(undefined)).toBe(false)
    expect(parseBoolean(null)).toBe(false)
    expect(parseBoolean(false)).toBe(false)
    expect(parseBoolean(true)).toBe(true)
    expect(parseBoolean(0)).toBe(false)
    expect(parseBoolean(1)).toBe(true)
    expect(parseBoolean(BigInt(0))).toBe(false)
    expect(parseBoolean(BigInt(1))).toBe(true)
    expect(parseBoolean('')).toBe(false)
    expect(parseBoolean('0')).toBe(false)
    expect(parseBoolean('1')).toBe(true)
  })
})

describe('parsing a boolean with invalid input', () => {
  test('throws an error', async () => {
    expect(() => {
      parseBoolean(-3.5)
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean(-1)
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean(3.5)
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean(BigInt(-3))
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean(BigInt(-1))
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean(BigInt(3))
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean('foo')
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean('-3.5')
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean('-1')
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean('3.5')
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean({})
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean([])
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean(() => { })
    }).toThrow('failed parsing boolean: invalid input')
    expect(() => {
      parseBoolean(Symbol('foo'))
    }).toThrow('failed parsing boolean: invalid input')
  })
})
