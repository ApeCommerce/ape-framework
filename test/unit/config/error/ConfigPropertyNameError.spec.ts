import { ConfigPropertyNameError } from 'config/error/ConfigPropertyNameError'

describe('creating a configuration property name error', () => {
  test('returns expected value', async () => {
    const error = new ConfigPropertyNameError('NAME')
    expect(error.message)
      .toBe('invalid configuration property name "NAME"')
  })
})
