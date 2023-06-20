describe('Loading the schema config', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/schema/config')).default;
    expect(config).toStrictEqual({
      tablePrefix: '_schema',
    });
  });
});
