import { initConfig } from 'config';

initConfig({
  jwtIssuer: 'issuer',
  jwtSecret: 'secret',
});

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = (await import('jwt/config')).default;
    expect(config).toStrictEqual({
      issuer: 'issuer',
      secret: 'secret',
    });
  });
});
