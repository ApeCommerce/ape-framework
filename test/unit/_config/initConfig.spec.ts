import { initConfig } from 'config'

describe('Initializing the configuration multiple times', () => {
  test('Returns expected value', async () => {
    const config1 = initConfig()
    const config2 = initConfig()
    const config3 = initConfig()
    expect(config1).not.toBe(config2)
    expect(config1).not.toBe(config3)
  })
})
