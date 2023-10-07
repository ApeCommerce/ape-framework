import { parseNumber } from 'utils';

describe('Parsing a number', () => {
  test('Returns expected value', async () => {
    expect(parseNumber(undefined)).toBe(0);
    expect(parseNumber(false)).toBe(0);
    expect(parseNumber(true)).toBe(0);
    expect(parseNumber('')).toBe(0);
    expect(parseNumber('foo')).toBe(0);
    expect(parseNumber({ foo: 'foo' })).toBe(0);
    expect(parseNumber(['one', 'two'])).toBe(0);
    expect(parseNumber(() => 'foo')).toBe(0);

    expect(parseNumber(0)).toBe(0);
    expect(parseNumber(3)).toBe(3);
    expect(parseNumber(1.5)).toBe(1.5);
    expect(parseNumber(-3)).toBe(-3);

    expect(parseNumber('0')).toBe(0);
    expect(parseNumber('3')).toBe(3);
    expect(parseNumber('1.5')).toBe(1.5);
    expect(parseNumber('-3')).toBe(-3);
  });
});
