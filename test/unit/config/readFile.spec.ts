import { readFile } from 'config/readFile'

describe('reading a configuration file', () => {
  test('returns expected value', async () => {
    expect(
      readFile('test/fixture/config/config.json'),
    ).toStrictEqual({
      foo: 'foo',
      bar: 'bar',
    })
  })
})

describe('reading a missing configuration file', () => {
  test('returns expected value', async () => {
    expect(
      readFile('test/fixture/config/missing.json'),
    ).toStrictEqual({})
  })
})

describe('reading a missing required configuration file', () => {
  test('throws an error', async () => {
    expect(() => {
      readFile('test/fixture/config/missing.json', true)
    }).toThrow('failed reading configuration file \
"test/fixture/config/missing.json": missing file')
  })
})

describe('reading an invalid configuration file', () => {
  test('throws an error', async () => {
    expect(() => {
      readFile('test/fixture/config')
    }).toThrow('failed reading configuration file "test/fixture/config": ')
    expect(() => {
      readFile('test/fixture/config/invalid/array.json')
    }).toThrow('failed reading configuration file \
"test/fixture/config/invalid/array.json": invalid content')
    expect(() => {
      readFile('test/fixture/config/invalid/boolean.json')
    }).toThrow('failed reading configuration file \
"test/fixture/config/invalid/boolean.json": invalid content')
    expect(() => {
      readFile('test/fixture/config/invalid/null.json')
    }).toThrow('failed reading configuration file \
"test/fixture/config/invalid/null.json": invalid content')
    expect(() => {
      readFile('test/fixture/config/invalid/number.json')
    }).toThrow('failed reading configuration file \
"test/fixture/config/invalid/number.json": invalid content')
    expect(() => {
      readFile('test/fixture/config/invalid/string.json')
    }).toThrow('failed reading configuration file \
"test/fixture/config/invalid/string.json": invalid content')
  })
})
