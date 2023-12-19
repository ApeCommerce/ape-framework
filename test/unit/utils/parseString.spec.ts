import { parseString } from 'utils'

describe('Parsing a string', () => {
  test('Returns expected value', async () => {
    expect(parseString(undefined)).toBe('')
    expect(parseString(false)).toBe('')
    expect(parseString(true)).toBe('')
    expect(parseString({ foo: 'foo' })).toBe('')
    expect(parseString(['one', 'two'])).toBe('')
    expect(parseString(() => 'foo')).toBe('')

    expect(parseString('')).toBe('')
    expect(parseString('foo')).toBe('foo')

    expect(parseString(0)).toBe('0')
    expect(parseString(3)).toBe('3')
    expect(parseString(1.5)).toBe('1.5')
    expect(parseString(-3)).toBe('-3')
  })
})
