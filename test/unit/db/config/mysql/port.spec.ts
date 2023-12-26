import { initConfig } from 'config'

initConfig({
  dbModule: 'mysql',
  dbMysqlHost: 'host',
  dbMysqlPort: 0,
  dbMysqlDatabase: 'database',
})

describe('Loading the config with missing mysql port', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('db/config')
    }).toThrow()
  })
})
