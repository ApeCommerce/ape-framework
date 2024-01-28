import { BaseError } from 'error/BaseError'

class FooError extends BaseError {
  public constructor(message: string) {
    super(message)
  }
}

describe('creating an instance of a subclass of base error', () => {
  test('returns expected value', async () => {
    const error = new FooError('foo')
    expect(error instanceof FooError).toBe(true)
    expect(error.name).toBe('FooError')
    expect(error.message).toBe('foo')
    expect(error.stack).toBeDefined()
  })
})
