import '../config';
import { getBundles, initBundles } from 'app';

describe('Initializing and getting the bundles', () => {
  test('Returns expected value', async () => {
    const bundles1 = await initBundles();
    const bundles2 = await getBundles();
    const bundles3 = await getBundles();
    expect(bundles1).toBe(bundles2);
    expect(bundles1).toBe(bundles3);
  });
});
