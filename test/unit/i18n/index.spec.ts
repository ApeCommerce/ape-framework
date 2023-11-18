import '../config';
import { getI18n, initI18n } from 'i18n';

describe('Initializing / getting internationalization', () => {
  test('Returns expected value', async () => {
    const i18n1 = await initI18n();
    const i18n2 = await getI18n();
    const i18n3 = await getI18n();
    expect(i18n1).toBe(i18n2);
    expect(i18n1).toBe(i18n3);
  });
});
