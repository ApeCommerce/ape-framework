import { node } from 'node'

describe('Importing the module in test environment', () => {
  test('Returns expected value', async () => {
    expect(node).toStrictEqual({
      env: 'test',
      path: '',
    })
  })
})
