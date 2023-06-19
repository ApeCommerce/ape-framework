import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 1000,
  dbPostgresDatabase: 'database',
  dbPostgresSsl: true,
  dbPostgresSslKey: 'src/test/fixture/ssl/key.pem',
});

describe('Loading the config with a postgres ssl key', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('db/config');
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
    });
  });
});
