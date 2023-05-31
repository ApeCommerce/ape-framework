import 'test/unit/config';
import { getBundle } from 'boot';

describe('Getting an existing bundle', () => {
  test('Returns expected value', async () => {
    const fooBundle = await getBundle('foo');
    expect(fooBundle?.bundleId).toBe('foo');

    const barBundle = await getBundle('bar');
    expect(barBundle?.bundleId).toBe('bar');
  });
});

describe('Getting a missing bundle', () => {
  test('Fails', async () => {
    const xxxBundle = await getBundle('xxx');
    expect(xxxBundle).toBe(undefined);
  });
});
