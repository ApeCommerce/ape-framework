import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  pwdHashCost: 0,
});

describe('Loading the config with missing hash cost', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await loadModule('pwd/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
