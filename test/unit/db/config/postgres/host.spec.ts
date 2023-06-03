import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: '',
  dbPostgresPort: 1000,
  dbPostgresDatabase: 'database',
});

describe('Loading the config with missing postgres host', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await loadModule('db/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
