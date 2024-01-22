import { parseBytes } from 'parser'

describe('parsing bytes', () => {
  test('returns expected value', async () => {
    expect(parseBytes(undefined)).toBe(0)
    expect(parseBytes(null)).toBe(0)
    expect(parseBytes(false)).toBe(0)
    expect(parseBytes(true)).toBe(0)

    expect(parseBytes(-3.5)).toBe(-3)
    expect(parseBytes(-1)).toBe(-1)
    expect(parseBytes(0)).toBe(0)
    expect(parseBytes(1)).toBe(1)
    expect(parseBytes(3.5)).toBe(3)

    expect(parseBytes('')).toBe(0)
    expect(parseBytes('foo')).toBe(0)
    expect(parseBytes('-3.5')).toBe(-3)
    expect(parseBytes('-1')).toBe(-1)
    expect(parseBytes('0')).toBe(0)
    expect(parseBytes('1')).toBe(1)
    expect(parseBytes('3.5')).toBe(3)

    expect(parseBytes({})).toBe(0)
    expect(parseBytes({ foo: 'bar' })).toBe(0)
    expect(parseBytes([])).toBe(0)
    expect(parseBytes(['foo', 'bar'])).toBe(0)
    expect(parseBytes(() => { })).toBe(0)

    expect(parseBytes('5b')).toBe(5)
    expect(parseBytes('5kb')).toBe(5120)
    expect(parseBytes('5mb')).toBe(5242880)
    expect(parseBytes('5gb')).toBe(5368709120)
    expect(parseBytes('5tb')).toBe(5497558138880)
    expect(parseBytes('5pb')).toBe(5629499534213120)
  })
})
