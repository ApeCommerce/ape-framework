import { initConfig } from 'config';

initConfig({
  appBoot: '',
});

describe('Loading the config with missing boot', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('app/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
