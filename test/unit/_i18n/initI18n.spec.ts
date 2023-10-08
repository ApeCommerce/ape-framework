import '../config';
import { initI18n } from 'i18n';

describe('Initializing i18n multiple times', () => {
  test('Returns the same instance', async () => {
    const i18n1 = await initI18n();
    const i18n2 = await initI18n();
    const i18n3 = await initI18n();
    expect(i18n1).toBe(i18n2);
    expect(i18n1).toBe(i18n3);
  });
});
