import '../../../fixture/env/production'
import { node } from 'node'

describe('Importing the module in production environment', () => {
  test('Returns expected value', async () => {
    expect(node).toStrictEqual({
      env: 'production',
      path: 'dist',
    })
  })
})
