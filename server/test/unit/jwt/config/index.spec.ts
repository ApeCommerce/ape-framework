import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  jwtIssuer: 'issuer',
  jwtSecret: 'secret',
});

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('jwt/config');
    expect(config).toStrictEqual({
      issuer: 'issuer',
      secret: 'secret',
    });
  });
});
