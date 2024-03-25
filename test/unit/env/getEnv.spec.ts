import { getEnv } from 'env/getEnv'

process.env.FOO = 'baz'

describe('getting the environment variables', () => {
  test('returns expected value', async () => {
    const env = getEnv()
    expect(env.FOO).toBe('baz')
  })
})

describe('getting the environment variables using a file', () => {
  test('returns expected value', async () => {
    const env = getEnv({ file: { path: 'test/fixture/env/.env' } })
    expect(env.FOO).toBe('baz')
    expect(env.BAR).toBe('bar')
  })
})
