import { initConfig } from 'config'

initConfig({
  logLevel: 'silent',
  logDestination: 'oops',
})

describe('Loading the config with invalid destination', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('log/config')
    }).toThrow()
  })
})
