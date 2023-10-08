import '../config';
import { getBundles, loadBundles } from 'boot';

describe('Loading and getting the bundles', () => {
  test('Returns the same instance', async () => {
    const bundles1 = await loadBundles();
    const bundles2 = await getBundles();
    const bundles3 = await getBundles();
    expect(bundles1).toBe(bundles2);
    expect(bundles1).toBe(bundles3);
  });
});
