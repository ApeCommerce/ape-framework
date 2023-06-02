import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'mysql',
  dbMysqlHost: 'host',
  dbMysqlPort: 0,
  dbMysqlDatabase: 'database',
});

describe('Loading the config with missing mysql port', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('db/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
