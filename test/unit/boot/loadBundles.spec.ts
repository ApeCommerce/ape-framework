import 'test/unit/config';
import { loadBundles } from 'boot';

describe('Loading the bundles multiple times', () => {
  test('Returns a different instance', async () => {
    const bundles1 = await loadBundles();
    const bundles2 = await loadBundles();
    const bundles3 = await loadBundles();
    expect(bundles1).not.toBe(bundles2);
    expect(bundles2).not.toBe(bundles3);
    expect(bundles3).not.toBe(bundles1);
  });
});
