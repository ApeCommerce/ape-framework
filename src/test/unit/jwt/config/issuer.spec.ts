import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  jwtIssuer: '',
  jwtSecret: 'secret',
});

describe('Loading the config with missing issuer', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await loadModule('jwt/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
