import { parseMilliseconds } from 'parser'

describe('parsing milliseconds', () => {
  test('returns expected value', async () => {
    expect(parseMilliseconds(undefined)).toBe(0)
    expect(parseMilliseconds(null)).toBe(0)
    expect(parseMilliseconds(false)).toBe(0)
    expect(parseMilliseconds(true)).toBe(0)

    expect(parseMilliseconds(-3.5)).toBe(-3)
    expect(parseMilliseconds(-1)).toBe(-1)
    expect(parseMilliseconds(0)).toBe(0)
    expect(parseMilliseconds(1)).toBe(1)
    expect(parseMilliseconds(3.5)).toBe(3)

    expect(parseMilliseconds('')).toBe(0)
    expect(parseMilliseconds('foo')).toBe(0)
    expect(parseMilliseconds('-3.5')).toBe(-3)
    expect(parseMilliseconds('-1')).toBe(-1)
    expect(parseMilliseconds('0')).toBe(0)
    expect(parseMilliseconds('1')).toBe(1)
    expect(parseMilliseconds('3.5')).toBe(3)

    expect(parseMilliseconds({})).toBe(0)
    expect(parseMilliseconds({ foo: 'bar' })).toBe(0)
    expect(parseMilliseconds([])).toBe(0)
    expect(parseMilliseconds(['foo', 'bar'])).toBe(0)
    expect(parseMilliseconds(() => { })).toBe(0)

    expect(parseMilliseconds('5ms')).toBe(5)
    expect(parseMilliseconds('5millisecond')).toBe(5)
    expect(parseMilliseconds('5milliseconds')).toBe(5)

    expect(parseMilliseconds('5s')).toBe(5000)
    expect(parseMilliseconds('5second')).toBe(5000)
    expect(parseMilliseconds('5seconds')).toBe(5000)

    expect(parseMilliseconds('5m')).toBe(300000)
    expect(parseMilliseconds('5minute')).toBe(300000)
    expect(parseMilliseconds('5minutes')).toBe(300000)

    expect(parseMilliseconds('5h')).toBe(18000000)
    expect(parseMilliseconds('5hour')).toBe(18000000)
    expect(parseMilliseconds('5hours')).toBe(18000000)

    expect(parseMilliseconds('5d')).toBe(432000000)
    expect(parseMilliseconds('5day')).toBe(432000000)
    expect(parseMilliseconds('5days')).toBe(432000000)

    expect(parseMilliseconds('5w')).toBe(3024000000)
    expect(parseMilliseconds('5week')).toBe(3024000000)
    expect(parseMilliseconds('5weeks')).toBe(3024000000)

    expect(parseMilliseconds('5month')).toBe(13149000000)
    expect(parseMilliseconds('5months')).toBe(13149000000)

    expect(parseMilliseconds('5y')).toBe(157788000000)
    expect(parseMilliseconds('5year')).toBe(157788000000)
    expect(parseMilliseconds('5years')).toBe(157788000000)

    expect(parseMilliseconds('5h 5m 5s')).toBe(18305000)
    expect(parseMilliseconds('5hour 5minute 5second')).toBe(18305000)
    expect(parseMilliseconds('5hours 5minutes 5seconds')).toBe(18305000)
  })
})
