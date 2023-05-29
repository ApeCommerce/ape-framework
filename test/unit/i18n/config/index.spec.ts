import 'test/unit/config';
import { loadModule } from 'utils';

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('i18n/config');
    expect(config).toStrictEqual({
      fallbackLanguage: 'en',
    });
  });
});
