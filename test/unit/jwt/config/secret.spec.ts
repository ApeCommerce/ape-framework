import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  jwtIssuer: 'foo',
  jwtSecret: '',
});

describe('Loading the config with missing secret', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('jwt/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
