import '../config';
import { loadBundles } from 'boot';

describe('Loading the bundles multiple times', () => {
  test('Returns expected value', async () => {
    const bundles1 = await loadBundles();
    const bundles2 = await loadBundles();
    const bundles3 = await loadBundles();
    expect(bundles1).not.toBe(bundles2);
    expect(bundles1).not.toBe(bundles3);
  });
});
