describe('getting the command line arguments', () => {
  test('succeeds', async () => {
    const { args } = await import('cli/args')
    expect(args).toBeDefined()
  })
})
