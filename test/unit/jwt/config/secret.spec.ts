import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  jwtIssuer: 'issuer',
  jwtSecret: '',
});

describe('Loading the config with missing secret', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await loadModule('jwt/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
