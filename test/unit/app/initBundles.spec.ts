import '../config';
import { initBundles } from 'app';

describe('Initializing the bundles', () => {
  test('Returns expected value', async () => {
    const bundles = await initBundles();
    expect(bundles.length).toBe(3);
    expect(bundles[0].bundleId).toBe('foo');
    expect(bundles[1].bundleId).toBe('bar');
    expect(bundles[2].bundleId).toBe('empty');
  });
});

describe('Initializing the bundles multiple times', () => {
  test('Returns expected value', async () => {
    const bundles1 = await initBundles();
    const bundles2 = await initBundles();
    const bundles3 = await initBundles();
    expect(bundles1).not.toBe(bundles2);
    expect(bundles1).not.toBe(bundles3);
  });
});
