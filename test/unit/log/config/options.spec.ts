import { initConfig } from 'config'

initConfig({
  logLevel: 'silent',
  logDestination: 'stdout',
})

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config: any = (await import('log/config')).default
    expect(config.options).toStrictEqual({
      level: 'silent',
    })
  })
})
