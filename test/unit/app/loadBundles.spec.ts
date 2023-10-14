import '../config';
import { initBundles } from 'app';

describe('Initializing the bundles multiple times', () => {
  test('Returns expected value', async () => {
    const bundles1 = await initBundles();
    const bundles2 = await initBundles();
    const bundles3 = await initBundles();
    expect(bundles1).not.toBe(bundles2);
    expect(bundles1).not.toBe(bundles3);
  });
});
