import 'test/config/unit';
import { loadModule } from 'utils';

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('jwt/config');
    expect(config).toStrictEqual({
      issuer: 'foo',
      secret: 'secret',
    });
  });
});
