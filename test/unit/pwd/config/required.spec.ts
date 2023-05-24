import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  pwdHashCost: 0,
});

describe('Loading the config lacking a required property', () => {
  test('Fails', async () => {
    expect.assertions(1);
    try {
      await loadModule('pwd/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
