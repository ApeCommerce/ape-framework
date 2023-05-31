import 'test/unit/config';
import { getBundle } from 'boot';

describe('Getting a bundle', () => {
  test('Returns expected value', async () => {
    const fooBundle = await getBundle('foo');
    expect(fooBundle?.bundleId).toBe('foo');

    const barBundle = await getBundle('bar');
    expect(barBundle?.bundleId).toBe('bar');

    const xxxBundle = await getBundle('xxx');
    expect(xxxBundle).toBe(undefined);
  });
});
