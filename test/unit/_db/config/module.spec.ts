import { initConfig } from 'config'

initConfig({
  dbModule: 'oops',
})

describe('Loading the config with invalid module', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('db/config')
    }).toThrow()
  })
})
