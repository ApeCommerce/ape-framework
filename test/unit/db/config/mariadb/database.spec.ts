import { initConfig } from 'config';

initConfig({
  dbModule: 'mariadb',
  dbMariadbHost: 'host',
  dbMariadbPort: 1000,
  dbMariadbDatabase: '',
});

describe('Loading the config with missing mariadb database', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('db/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
