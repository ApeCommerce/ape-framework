import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  i18nFallbackLanguage: 'en',
});

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('i18n/config');
    expect(config).toStrictEqual({
      fallbackLanguage: 'en',
    });
  });
});
