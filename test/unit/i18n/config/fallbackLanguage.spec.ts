import { initConfig } from 'config';

initConfig({
  i18nFallbackLanguage: '',
});

describe('Loading the config with missing fallback language', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('i18n/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
