import postProcess from 'db/postProcess';

describe('Post processing a response', () => {
  test('Returns expected value', async () => {
    expect(postProcess(undefined)).toBe(undefined);
    expect(postProcess(false)).toBe(false);
    expect(postProcess(true)).toBe(true);
    expect(postProcess(0)).toBe(0);
    expect(postProcess(3)).toBe(3);
    expect(postProcess('')).toBe('');
    expect(postProcess('0')).toBe('0');
    expect(postProcess('3')).toBe('3');
    expect(postProcess('foo')).toBe('foo');
    expect(postProcess({ foo: 'foo' })).toStrictEqual({ foo: 'foo' });
    expect(postProcess(['one', 'two'])).toStrictEqual(['one', 'two']);

    expect(postProcess({ isFoo: undefined })).toStrictEqual({ isFoo: false });
    expect(postProcess({ isFoo: false })).toStrictEqual({ isFoo: false });
    expect(postProcess({ isFoo: 0 })).toStrictEqual({ isFoo: false });
    expect(postProcess({ isFoo: 3 })).toStrictEqual({ isFoo: false });
    expect(postProcess({ isFoo: '' })).toStrictEqual({ isFoo: false });
    expect(postProcess({ isFoo: '0' })).toStrictEqual({ isFoo: false });
    expect(postProcess({ isFoo: '3' })).toStrictEqual({ isFoo: false });
    expect(postProcess({ isFoo: 'foo' })).toStrictEqual({ isFoo: false });
    expect(postProcess({ isFoo: { foo: 'foo' } })).toStrictEqual({ isFoo: false });
    expect(postProcess({ isFoo: ['one', 'two'] })).toStrictEqual({ isFoo: false });

    expect(postProcess({ isFoo: true })).toStrictEqual({ isFoo: true });
    expect(postProcess({ isFoo: 1 })).toStrictEqual({ isFoo: true });
    expect(postProcess({ isFoo: '1' })).toStrictEqual({ isFoo: true });

    expect(postProcess([
      { isFoo: '0', one: 'hip', two: 'hop' },
      { isFoo: '1', one: 'hip', two: 'hop' },
    ])).toStrictEqual([
      { isFoo: false, one: 'hip', two: 'hop' },
      { isFoo: true, one: 'hip', two: 'hop' },
    ]);
  });
});
