import { readFile } from 'env/readFile'

describe('reading an environment file', () => {
  test('returns expected value', async () => {
    expect(
      readFile('test/fixture/env/.env'),
    ).toStrictEqual({
      FOO: 'foo',
      BAR: 'bar',
    })
  })
})

describe('reading a missing environment file', () => {
  test('returns expected value', async () => {
    expect(
      readFile('test/fixture/env/missing.env'),
    ).toStrictEqual({})
  })
})

describe('reading a missing required environment file', () => {
  test('throws an error', async () => {
    expect(() => {
      readFile('test/fixture/env/missing.env', true)
    }).toThrow('failed reading environment file \
"test/fixture/env/missing.env": missing file')
  })
})

describe('reading an invalid environment file', () => {
  test('throws an error', async () => {
    expect(() => {
      readFile('test/fixture/env')
    }).toThrow('failed reading environment file "test/fixture/env": ')
  })
})
