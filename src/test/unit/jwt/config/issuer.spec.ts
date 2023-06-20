import { initConfig } from 'config';

initConfig({
  jwtIssuer: '',
  jwtSecret: 'secret',
});

describe('Loading the config with missing issuer', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('jwt/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
