import { loadFile } from 'env/loadFile'
import type { Env } from 'env/Env'

describe('loading an environment file', () => {
  test('has expected side effect', async () => {
    const env: Env = {}
    loadFile('test/fixture/env/file', env)
    expect(env.FOO).toBe('foo')
    expect(env.BAR).toBeUndefined()
  })
})

describe('loading an environment file with a conflicting value', () => {
  test('has expected side effect', async () => {
    const env: Env = { FOO: 'bar' }
    loadFile('test/fixture/env/file', env)
    expect(env.FOO).toBe('bar')
  })
})

describe('loading a missing environment file', () => {
  test('succeeds', async () => {
    const env: Env = {}
    loadFile('test/fixture/env/x', env)
  })
})
