import { BaseError } from 'error/BaseError'

describe('creating a new instance of base error', () => {
  test('returns expected value', async () => {
    const error = new BaseError('foo')
    expect(error).toBeInstanceOf(BaseError)
    expect(error.name).toBe('BaseError')
    expect(error.message).toBe('foo')
    expect(error.stack).toBeDefined()
  })
})
