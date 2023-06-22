import { initConfig } from 'config';

initConfig({
  pwdHashCost: 0,
});

describe('Loading the config with missing hash cost', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('pwd/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
