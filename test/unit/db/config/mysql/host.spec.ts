import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'mysql',
  dbMysqlHost: '',
  dbMysqlPort: 1000,
  dbMysqlDatabase: 'database',
});

describe('Loading the config with missing mysql host', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('db/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
