import '../config';
import { getBundle } from 'app';

describe('Getting a bundle', () => {
  test('Returns expected value', async () => {
    const fooBundle = await getBundle('foo');
    expect(fooBundle?.bundleId).toBe('foo');

    const barBundle = await getBundle('bar');
    expect(barBundle?.bundleId).toBe('bar');
  });
});

describe('Getting a missing bundle', () => {
  test('Returns expected value', async () => {
    const oopsBundle = await getBundle('oops');
    expect(oopsBundle).toBe(undefined);
  });
});
