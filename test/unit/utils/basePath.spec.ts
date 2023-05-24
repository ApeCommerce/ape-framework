import { basePath } from 'utils';

describe('Getting the base path of a string using default separator', () => {
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

describe('Getting the base path of a string using a custom separator', () => {
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
