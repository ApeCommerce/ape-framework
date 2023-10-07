import { initConfig } from 'config';

initConfig({
  dbModule: 'oops',
});

describe('Loading the config with invalid module', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('db/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
