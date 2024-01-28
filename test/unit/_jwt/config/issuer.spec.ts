import { initConfig } from 'config'

initConfig({
  jwtIssuer: '',
  jwtSecret: 'secret',
})

describe('Loading the config with missing issuer', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('jwt/config')
    }).toThrow()
  })
})
