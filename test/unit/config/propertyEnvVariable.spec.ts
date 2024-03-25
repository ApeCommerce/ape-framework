import { propertyEnvVariable } from 'config/propertyEnvVariable'

describe('getting a configuration property\'s environment variable', () => {
  test('returns expected value', async () => {
    expect(propertyEnvVariable('foo')).toBe('FOO')
    expect(propertyEnvVariable('x2z')).toBe('X2Z')
    expect(propertyEnvVariable('xy3')).toBe('XY3')
    expect(propertyEnvVariable('fooBar')).toBe('FOO_BAR')
    expect(propertyEnvVariable('x2zBar')).toBe('X2Z_BAR')
    expect(propertyEnvVariable('xy3Bar')).toBe('XY3_BAR')
    expect(propertyEnvVariable('fooX2z')).toBe('FOO_X2Z')
    expect(propertyEnvVariable('fooXy3')).toBe('FOO_XY3')
    expect(propertyEnvVariable('fooBarBaz')).toBe('FOO_BAR_BAZ')
  })
})
