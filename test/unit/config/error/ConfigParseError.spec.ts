import { ConfigParseError } from 'config/error/ConfigParseError'

describe('creating a configuration parse error', () => {
  test('returns expected value', async () => {
    const error = new ConfigParseError('PROPERTY', 'SOURCE', 'MESSAGE')
    expect(error.message)
      .toBe('failed parsing property "PROPERTY" from SOURCE: MESSAGE')
  })
})
