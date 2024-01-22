import '../../fixture/env'
import { getPath } from 'node'

describe('getting the node path', () => {
  test('returns expected value', async () => {
    expect(getPath()).toBe('bar')
  })
})
