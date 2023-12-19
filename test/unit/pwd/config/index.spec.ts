import { initConfig } from 'config'

initConfig({
  pwdHashCost: 3,
})

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = (await import('pwd/config')).default
    expect(config).toStrictEqual({
      hashCost: 3,
    })
  })
})
