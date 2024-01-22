import { BaseError } from 'error'

describe('instantiating a new error', () => {
  test('returns expected value', async () => {
    const error = new BaseError('foo')
    expect(error instanceof BaseError).toBe(true)
    expect(error.name).toBe('BaseError')
    expect(error.message).toBe('foo')
    expect(error.stack).toBeDefined()
  })
})
