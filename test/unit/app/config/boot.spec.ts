import { initConfig } from 'config'

initConfig({
  appBoot: '',
})

describe('Loading the config with missing boot', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('app/config')
    }).toThrow()
  })
})
