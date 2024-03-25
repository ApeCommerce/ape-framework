import { validatePropertyName } from 'config/validatePropertyName'

describe('validating a configuration property name', () => {
  test('succeeds', async () => {
    validatePropertyName('foo')
    validatePropertyName('x2z')
    validatePropertyName('xy3')
    validatePropertyName('fooBar')
    validatePropertyName('x2zBar')
    validatePropertyName('xy3Bar')
    validatePropertyName('fooX2z')
    validatePropertyName('fooXy3')
    validatePropertyName('fooBarBaz')
  })
})

describe('validating an invalid configuration property name', () => {
  test('throws an error', async () => {
    expect(() => {
      validatePropertyName('f')
    }).toThrow('invalid configuration property name "f"')
    expect(() => {
      validatePropertyName('fBar')
    }).toThrow('invalid configuration property name "fBar"')
    expect(() => {
      validatePropertyName('fooB')
    }).toThrow('invalid configuration property name "fooB"')
    expect(() => {
      validatePropertyName('fooBBaz')
    }).toThrow('invalid configuration property name "fooBBaz"')
    expect(() => {
      validatePropertyName('1yz')
    }).toThrow('invalid configuration property name "1yz"')
    expect(() => {
      validatePropertyName('1yzBar')
    }).toThrow('invalid configuration property name "1yzBar"')
    expect(() => {
      validatePropertyName('Foo')
    }).toThrow('invalid configuration property name "Foo"')
    expect(() => {
      validatePropertyName('FooBar')
    }).toThrow('invalid configuration property name "FooBar"')
  })
})
