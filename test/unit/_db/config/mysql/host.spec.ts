import { initConfig } from 'config'

initConfig({
  dbModule: 'mysql',
  dbMysqlHost: '',
  dbMysqlPort: 1000,
  dbMysqlDatabase: 'database',
})

describe('Loading the config with missing mysql host', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('db/config')
    }).toThrow()
  })
})
