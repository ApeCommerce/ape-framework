import { initConfig } from 'config'

initConfig({
  jwtIssuer: 'issuer',
  jwtSecret: '',
})

describe('Loading the config with missing secret', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('jwt/config')
    }).toThrow()
  })
})
