import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'mysql',
  dbMysqlHost: 'host',
  dbMysqlPort: 1000,
  dbMysqlDatabase: 'database',
  dbMysqlSsl: true,
  dbMysqlSslCert: 'src/test/fixture/ssl/cert.pem',
});

describe('Loading the config with a mysql ssl cert', () => {
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
