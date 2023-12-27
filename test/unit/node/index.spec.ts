import node from 'node'

describe('Getting the node env', () => {
  test('Returns expected value', async () => {
    expect(node.env).toBe('test')
  })
})

describe('Getting the node path', () => {
  test('Returns expected value', async () => {
    expect(node.path).toBe('src')
  })
})
