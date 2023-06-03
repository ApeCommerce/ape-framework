import 'test/unit/config';
import { getI18n } from 'i18n';

describe('Getting a translation', () => {
  test('Returns expected value', async () => {
    const i18n = await getI18n();
    expect(i18n.t('foo:greeting', { lng: 'en', name: 'John' })).toBe('Hi John!');
    expect(i18n.t('foo:greeting', { lng: 'fr', name: 'John' })).toBe('Salut John !');
    expect(i18n.t('foo:oops', { lng: 'en' })).toBe('Oops!');
    expect(i18n.t('foo:oops', { lng: 'fr' })).toBe('Oops!');

    expect(i18n.t('bar:one.hip', { lng: 'en' })).toBe('I saw a bear today.');
    expect(i18n.t('bar:one.hip', { lng: 'fr' })).toBe('J\'ai vu un ours aujourd\'hui.');
    expect(i18n.t('bar:two.hop', { lng: 'en' })).toBe('You and I will always be friends.');
    expect(i18n.t('bar:two.hop', { lng: 'fr' })).toBe('Toi et moi serons toujours amis.');
  });
});
