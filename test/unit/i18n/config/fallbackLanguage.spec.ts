import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  i18nFallbackLanguage: '',
});

describe('Loading the config with missing fallback language', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('i18n/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
