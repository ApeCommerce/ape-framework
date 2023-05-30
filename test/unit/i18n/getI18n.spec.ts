import 'test/unit/config';
import { getI18n } from 'i18n';

describe('Getting the module multiple times', () => {
  test('Returns the same instance', async () => {
    const i18n1 = await getI18n();
    const i18n2 = await getI18n();
    const i18n3 = await getI18n();
    expect(i18n1).toBe(i18n2);
    expect(i18n2).toBe(i18n3);
    expect(i18n3).toBe(i18n1);
  });
});
