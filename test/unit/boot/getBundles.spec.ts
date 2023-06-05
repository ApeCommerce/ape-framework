import 'test/unit/config';
import { getBundles } from 'boot';

describe('Getting bundles', () => {
  test('Returns expected value', async () => {
    const bundles = await getBundles();
    expect(bundles.length).toBe(3);
    expect(bundles[0].bundleId).toBe('foo');
    expect(bundles[1].bundleId).toBe('bar');
    expect(bundles[2].bundleId).toBe('empty');
  });
});

describe('Getting bundles multiple times', () => {
  test('Returns the same instance', async () => {
    const bundles1 = await getBundles();
    const bundles2 = await getBundles();
    const bundles3 = await getBundles();
    expect(bundles1).toBe(bundles2);
    expect(bundles2).toBe(bundles3);
    expect(bundles3).toBe(bundles1);
  });
});
