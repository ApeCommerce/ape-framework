import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 0,
  dbPostgresDatabase: 'database',
});

describe('Loading the config with missing postgres port', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await loadModule('db/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});