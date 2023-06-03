import postProcessResponse from 'db/postProcess';

describe('Post processing a response', () => {
  test('Returns expected value', async () => {
    expect(postProcessResponse({})).toStrictEqual({});
  });
});
