import { ConfigFileReadError } from 'config/error/ConfigFileReadError'

describe('creating a configuration file read error', () => {
  test('returns expected value', async () => {
    const error = new ConfigFileReadError('PATH', 'MESSAGE')
    expect(error.message)
      .toBe('failed reading configuration file "PATH": MESSAGE')
  })
})
