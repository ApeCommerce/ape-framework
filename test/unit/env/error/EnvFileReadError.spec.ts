import { EnvFileReadError } from 'env/error/EnvFileReadError'

describe('creating an environment file read error', () => {
  test('returns expected value', async () => {
    const error = new EnvFileReadError('PATH', 'MESSAGE')
    expect(error.message)
      .toBe('failed reading environment file "PATH": MESSAGE')
  })
})
