import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'oops',
});

describe('Loading the config with invalid module', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('db/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
