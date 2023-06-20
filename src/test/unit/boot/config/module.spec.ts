import { initConfig } from 'config';

initConfig({
  bootModule: '',
});

describe('Loading the config with missing module', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('boot/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
