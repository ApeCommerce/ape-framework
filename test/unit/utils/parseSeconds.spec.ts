import { parseSeconds } from 'utils'

describe('Parsing seconds', () => {
  test('Returns expected value', async () => {
    expect(parseSeconds(undefined)).toBe(0)
    expect(parseSeconds(null)).toBe(0)
    expect(parseSeconds(false)).toBe(0)
    expect(parseSeconds(true)).toBe(0)

    expect(parseSeconds(-3.5)).toBe(-3)
    expect(parseSeconds(-1)).toBe(-1)
    expect(parseSeconds(0)).toBe(0)
    expect(parseSeconds(1)).toBe(1)
    expect(parseSeconds(3.5)).toBe(3)

    expect(parseSeconds('')).toBe(0)
    expect(parseSeconds('foo')).toBe(0)
    expect(parseSeconds('-3.5')).toBe(-3)
    expect(parseSeconds('-1')).toBe(-1)
    expect(parseSeconds('0')).toBe(0)
    expect(parseSeconds('1')).toBe(1)
    expect(parseSeconds('3.5')).toBe(3)

    expect(parseSeconds({})).toBe(0)
    expect(parseSeconds({ foo: 'bar' })).toBe(0)
    expect(parseSeconds([])).toBe(0)
    expect(parseSeconds(['foo', 'bar'])).toBe(0)
    expect(parseSeconds(() => { })).toBe(0)

    expect(parseSeconds('5ms')).toBe(0)
    expect(parseSeconds('5millisecond')).toBe(0)
    expect(parseSeconds('5milliseconds')).toBe(0)

    expect(parseSeconds('5s')).toBe(5)
    expect(parseSeconds('5second')).toBe(5)
    expect(parseSeconds('5seconds')).toBe(5)

    expect(parseSeconds('5m')).toBe(300)
    expect(parseSeconds('5minute')).toBe(300)
    expect(parseSeconds('5minutes')).toBe(300)

    expect(parseSeconds('5h')).toBe(18000)
    expect(parseSeconds('5hour')).toBe(18000)
    expect(parseSeconds('5hours')).toBe(18000)

    expect(parseSeconds('5d')).toBe(432000)
    expect(parseSeconds('5day')).toBe(432000)
    expect(parseSeconds('5days')).toBe(432000)

    expect(parseSeconds('5w')).toBe(3024000)
    expect(parseSeconds('5week')).toBe(3024000)
    expect(parseSeconds('5weeks')).toBe(3024000)

    expect(parseSeconds('5month')).toBe(13149000)
    expect(parseSeconds('5months')).toBe(13149000)

    expect(parseSeconds('5y')).toBe(157788000)
    expect(parseSeconds('5year')).toBe(157788000)
    expect(parseSeconds('5years')).toBe(157788000)

    expect(parseSeconds('5h 5m 5s')).toBe(18305)
    expect(parseSeconds('5hour 5minute 5second')).toBe(18305)
    expect(parseSeconds('5hours 5minutes 5seconds')).toBe(18305)
  })
})
