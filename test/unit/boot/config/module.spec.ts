import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  bootModule: '',
});

describe('Loading the config with missing module', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('boot/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
