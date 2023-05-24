import { basePath } from 'utils';

describe('Getting a base path using default separator', () => {
  test('Returns expected value', async () => {
    expect(basePath(undefined)).toBe('');
    expect(basePath('')).toBe('');
    expect(basePath('/')).toBe('');
    expect(basePath('/foo')).toBe('foo');
    expect(basePath('/foo/bar')).toBe('foo');
    expect(basePath('//foo')).toBe('foo');
    expect(basePath('//foo//bar')).toBe('foo');
    expect(basePath('foo')).toBe('foo');
    expect(basePath('foo/bar')).toBe('foo');
  });
});

describe('Getting a base path using a custom separator', () => {
  test('Returns expected value', async () => {
    expect(basePath(undefined, '-')).toBe('');
    expect(basePath('', '-')).toBe('');
    expect(basePath('-', '-')).toBe('');
    expect(basePath('-foo', '-')).toBe('foo');
    expect(basePath('-foo-bar', '-')).toBe('foo');
    expect(basePath('--foo', '-')).toBe('foo');
    expect(basePath('--foo--bar', '-')).toBe('foo');
    expect(basePath('foo', '-')).toBe('foo');
    expect(basePath('foo-bar', '-')).toBe('foo');
  });
});
