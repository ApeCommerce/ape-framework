import { parseNumber } from 'utils'

describe('Parsing a number', () => {
  test('Returns expected value', async () => {
    expect(parseNumber(undefined)).toBe(0)
    expect(parseNumber(null)).toBe(0)
    expect(parseNumber(false)).toBe(0)
    expect(parseNumber(true)).toBe(0)

    expect(parseNumber(-3.5)).toBe(-3.5)
    expect(parseNumber(-1)).toBe(-1)
    expect(parseNumber(0)).toBe(0)
    expect(parseNumber(1)).toBe(1)
    expect(parseNumber(3.5)).toBe(3.5)

    expect(parseNumber('')).toBe(0)
    expect(parseNumber('foo')).toBe(0)
    expect(parseNumber('-3.5')).toBe(-3.5)
    expect(parseNumber('-1')).toBe(-1)
    expect(parseNumber('0')).toBe(0)
    expect(parseNumber('1')).toBe(1)
    expect(parseNumber('3.5')).toBe(3.5)

    expect(parseNumber({})).toBe(0)
    expect(parseNumber({ foo: 'bar' })).toBe(0)
    expect(parseNumber([])).toBe(0)
    expect(parseNumber(['foo', 'bar'])).toBe(0)
    expect(parseNumber(() => { })).toBe(0)
  })
})
