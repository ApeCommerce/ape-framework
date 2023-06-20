import { initConfig } from 'config';

initConfig({
  dbModule: 'mariadb',
  dbMariadbHost: 'host',
  dbMariadbPort: 1000,
  dbMariadbDatabase: 'database',
  dbMariadbSsl: true,
  dbMariadbSslCa: 'src/test/fixture/ssl/ca.pem',
});

describe('Loading the config with a mariadb ssl ca', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default;
    expect(config).toStrictEqual({
      client: 'mysql2',
      connection: {
        host: 'host',
        port: 1000,
        database: 'database',
        ssl: {
          ca: `-----BEGIN CERTIFICATE-----
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
