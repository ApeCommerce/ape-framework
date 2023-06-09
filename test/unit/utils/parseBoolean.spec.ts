import { parseBoolean } from 'utils';

describe('Parsing a boolean', () => {
  test('Returns expected value', async () => {
    expect(parseBoolean(undefined)).toBe(false);
    expect(parseBoolean(false)).toBe(false);
    expect(parseBoolean(0)).toBe(false);
    expect(parseBoolean(3)).toBe(false);
    expect(parseBoolean('')).toBe(false);
    expect(parseBoolean('0')).toBe(false);
    expect(parseBoolean('3')).toBe(false);
    expect(parseBoolean('foo')).toBe(false);
    expect(parseBoolean({ foo: 'foo' })).toBe(false);
    expect(parseBoolean(['one', 'two'])).toBe(false);
    expect(parseBoolean(() => 'foo')).toBe(false);

    expect(parseBoolean(true)).toBe(true);
    expect(parseBoolean(1)).toBe(true);
    expect(parseBoolean('1')).toBe(true);
  });
});
