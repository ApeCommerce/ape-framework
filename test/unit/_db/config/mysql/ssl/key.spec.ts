import { initConfig } from 'config'

initConfig({
  dbModule: 'mysql',
  dbMysqlHost: 'host',
  dbMysqlPort: 1000,
  dbMysqlDatabase: 'database',
  dbMysqlSsl: true,
  dbMysqlSslKey: 'test/fixture/ssl/key.pem',
})

describe('Loading the config with a mysql ssl key', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default
    expect(config).toStrictEqual({
      client: 'mysql2',
      connection: {
        host: 'host',
        port: 1000,
        database: 'database',
        ssl: {
          key: `-----BEGIN PRIVATE KEY-----
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
-----END PRIVATE KEY-----`,
          rejectUnauthorized: true,
        },
      },
      pool: {
        min: 0,
        max: 5,
      },
    })
  })
})
