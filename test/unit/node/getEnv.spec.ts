import '../../fixture/env'
import { getEnv } from 'node'

describe('getting the node env', () => {
  test('returns expected value', async () => {
    expect(getEnv()).toBe('foo')
  })
})
