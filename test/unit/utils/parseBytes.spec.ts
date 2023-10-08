import { parseBytes } from 'utils';

describe('Parsing bytes', () => {
  test('Returns expected value', async () => {
    expect(parseBytes(undefined)).toBe(0);
    expect(parseBytes(false)).toBe(0);
    expect(parseBytes(true)).toBe(0);
    expect(parseBytes('')).toBe(0);
    expect(parseBytes('foo')).toBe(0);
    expect(parseBytes({ foo: 'foo' })).toBe(0);
    expect(parseBytes(['one', 'two'])).toBe(0);
    expect(parseBytes(() => 'foo')).toBe(0);

    expect(parseBytes(0)).toBe(0);
    expect(parseBytes(3)).toBe(3);
    expect(parseBytes(1.5)).toBe(1);
    expect(parseBytes(-3)).toBe(-3);

    expect(parseBytes('0')).toBe(0);
    expect(parseBytes('3')).toBe(3);
    expect(parseBytes('1.5')).toBe(1);
    expect(parseBytes('-3')).toBe(-3);

    expect(parseBytes('0b')).toBe(0);
    expect(parseBytes('3b')).toBe(3);
    expect(parseBytes('1.5b')).toBe(1);
    expect(parseBytes('-3b')).toBe(-3);

    expect(parseBytes('3B')).toBe(3);
    expect(parseBytes('3 b')).toBe(3);
    expect(parseBytes('3 B')).toBe(3);

    expect(parseBytes('3kb')).toBe(3072);
    expect(parseBytes('3mb')).toBe(3145728);
    expect(parseBytes('3gb')).toBe(3221225472);
    expect(parseBytes('3tb')).toBe(3298534883328);
    expect(parseBytes('3pb')).toBe(3377699720527872);
  });
});
