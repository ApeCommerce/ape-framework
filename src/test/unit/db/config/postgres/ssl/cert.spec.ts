import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 1000,
  dbPostgresDatabase: 'database',
  dbPostgresSsl: true,
  dbPostgresSslCert: 'src/test/fixture/ssl/cert.pem',
});

describe('Loading the config with a postgres ssl cert', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('db/config');
    expect(config).toStrictEqual({
      client: 'pg',
      connection: {
        host: 'host',
        port: 1000,
        database: 'database',
        ssl: {
          cert: `-----BEGIN CERTIFICATE-----
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
-----END CERTIFICATE-----`,
          rejectUnauthorized: true,
        },
      },
    });
  });
});
