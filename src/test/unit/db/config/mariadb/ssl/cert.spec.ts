import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'mariadb',
  dbMariadbHost: 'host',
  dbMariadbPort: 1000,
  dbMariadbDatabase: 'database',
  dbMariadbSsl: true,
  dbMariadbSslCert: 'src/test/fixture/ssl/cert.pem',
});

describe('Loading the config with a mariadb ssl cert', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('db/config');
    expect(config).toStrictEqual({
      client: 'mysql2',
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
