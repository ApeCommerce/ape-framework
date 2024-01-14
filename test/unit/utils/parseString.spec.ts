import { parseString } from 'utils'

describe('Parsing a string', () => {
  test('Returns expected value', async () => {
    expect(parseString(undefined)).toBe('')
    expect(parseString(null)).toBe('')
    expect(parseString(false)).toBe('')
    expect(parseString(true)).toBe('')

    expect(parseString(-3.5)).toBe('-3.5')
    expect(parseString(-1)).toBe('-1')
    expect(parseString(0)).toBe('0')
    expect(parseString(1)).toBe('1')
    expect(parseString(3.5)).toBe('3.5')

    expect(parseString('')).toBe('')
    expect(parseString('foo')).toBe('foo')
    expect(parseString('-3.5')).toBe('-3.5')
    expect(parseString('-1')).toBe('-1')
    expect(parseString('0')).toBe('0')
    expect(parseString('1')).toBe('1')
    expect(parseString('3.5')).toBe('3.5')

    expect(parseString({})).toBe('')
    expect(parseString({ foo: 'bar' })).toBe('')
    expect(parseString([])).toBe('')
    expect(parseString(['foo', 'bar'])).toBe('')
    expect(parseString(() => { })).toBe('')
  })
})
