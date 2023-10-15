import { initConfig } from 'config';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 1000,
  dbPostgresDatabase: 'database',
  dbPostgresSsl: true,
  dbPostgresSslKey: 'test/fixture/ssl/key.pem',
});

describe('Loading the config with a postgres ssl key', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default;
    expect(config).toStrictEqual({
      client: 'pg',
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
    });
  });
});
