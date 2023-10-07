describe('Loading the config config', () => {
  test('Returns expected value', async () => {
    const config = (await import('config/config')).default;
    expect(config).toStrictEqual({
      filename: 'ape.config.json',
    });
  });
});
