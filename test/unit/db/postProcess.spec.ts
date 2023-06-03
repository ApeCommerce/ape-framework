import postProcessResponse from 'db/postProcess';

describe('Post processing a response', () => {
  test('Returns expected value', async () => {
    expect(postProcessResponse(undefined)).toBe(undefined);
    expect(postProcessResponse(false)).toBe(false);
    expect(postProcessResponse(true)).toBe(true);
    expect(postProcessResponse(0)).toBe(0);
    expect(postProcessResponse(3)).toBe(3);
    expect(postProcessResponse('')).toBe('');
    expect(postProcessResponse('0')).toBe('0');
    expect(postProcessResponse('3')).toBe('3');
    expect(postProcessResponse('foo')).toBe('foo');
    expect(postProcessResponse({ foo: 'foo' })).toStrictEqual({ foo: 'foo' });
    expect(postProcessResponse(['one', 'two'])).toStrictEqual(['one', 'two']);

    expect(postProcessResponse({ isFoo: undefined })).toStrictEqual({ isFoo: false });
    expect(postProcessResponse({ isFoo: false })).toStrictEqual({ isFoo: false });
    expect(postProcessResponse({ isFoo: 0 })).toStrictEqual({ isFoo: false });
    expect(postProcessResponse({ isFoo: 3 })).toStrictEqual({ isFoo: false });
    expect(postProcessResponse({ isFoo: '' })).toStrictEqual({ isFoo: false });
    expect(postProcessResponse({ isFoo: '0' })).toStrictEqual({ isFoo: false });
    expect(postProcessResponse({ isFoo: '3' })).toStrictEqual({ isFoo: false });
    expect(postProcessResponse({ isFoo: 'foo' })).toStrictEqual({ isFoo: false });
    expect(postProcessResponse({ isFoo: { foo: 'foo' } })).toStrictEqual({ isFoo: false });
    expect(postProcessResponse({ isFoo: ['one', 'two'] })).toStrictEqual({ isFoo: false });

    expect(postProcessResponse({ isFoo: true })).toStrictEqual({ isFoo: true });
    expect(postProcessResponse({ isFoo: 1 })).toStrictEqual({ isFoo: true });
    expect(postProcessResponse({ isFoo: '1' })).toStrictEqual({ isFoo: true });

    expect(postProcessResponse([
      { isFoo: '0', one: 'hip', two: 'hop' },
      { isFoo: '1', one: 'hip', two: 'hop' },
    ])).toStrictEqual([
      { isFoo: false, one: 'hip', two: 'hop' },
      { isFoo: true, one: 'hip', two: 'hop' },
    ]);
  });
});
