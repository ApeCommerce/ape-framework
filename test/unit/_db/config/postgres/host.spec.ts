import { initConfig } from 'config'

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: '',
  dbPostgresPort: 1000,
  dbPostgresDatabase: 'database',
})

describe('Loading the config with missing postgres host', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('db/config')
    }).toThrow()
  })
})
