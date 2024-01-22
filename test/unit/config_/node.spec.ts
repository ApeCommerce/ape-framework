describe('Loading the node configuration', () => {
  test('Returns expected value', async () => {
    const config = (await import('config/node')).default
    expect(config).toStrictEqual({
      env: 'test',
      path: 'src',
    })
  })
})
