import '../../../fixture/env/development'
import { node } from 'node'

describe('Importing the module in development environment', () => {
  test('Returns expected value', async () => {
    expect(node).toStrictEqual({
      env: 'development',
      path: 'src',
    })
  })
})
