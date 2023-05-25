import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  pwdHashCost: 0,
});

describe('Loading a config lacking a hash cost', () => {
  test('Fails', async () => {
    expect.assertions(1);
    try {
      await loadModule('pwd/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
