import { initConfig } from 'config'
import { Socket } from 'net'

initConfig({
  logLevel: 'silent',
  logDestination: 'stdout',
})

describe('Loading the config with stdout as destination', () => {
  test('Returns expected value', async () => {
    const config: any = (await import('log/config')).default
    expect(config.stream).toBeInstanceOf(Socket)
  })
})
