import { initConfig } from 'config'

initConfig({
  logLevel: 'silent',
  logDestination: 'file',
  logFile: '',
})

describe('Loading the config with missing file', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('log/config')
    }).toThrow()
  })
})
