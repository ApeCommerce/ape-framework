import { initConfig } from 'config';

initConfig({
  jwtIssuer: 'issuer',
  jwtSecret: '',
});

describe('Loading the config with missing secret', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('jwt/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
