import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  bootModule: 'test/fixture/boot/empty',
  i18nFallbackLanguage: 'en',
});

describe('Initializing the instance with no translation', () => {
  test('Succeeds', async () => {
    const module = await loadModule<any>('i18n');
    await module.initI18n();
  });
});
