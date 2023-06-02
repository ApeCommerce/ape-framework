import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 1000,
  dbPostgresDatabase: '',
});

describe('Loading the config with missing postgres database', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('db/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
