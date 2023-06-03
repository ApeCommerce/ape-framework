import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'mariadb',
  dbMariadbHost: 'host',
  dbMariadbPort: 0,
  dbMariadbDatabase: 'database',
});

describe('Loading the config with missing mariadb port', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await loadModule('db/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
