describe('getting an environment variable', () => {
  test('returns expected value', async () => {
    process.env.FOO = 'foo'
    const { env } = await import('env')
    expect(env.FOO).toBe('foo')
    expect(env.BAR).toBeUndefined()
  })
})
