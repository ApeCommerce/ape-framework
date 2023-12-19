import { initConfig } from 'config'

initConfig({
  pwdHashCost: 0,
})

describe('Loading the config with missing hash cost', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('pwd/config')
    }).toThrow()
  })
})
