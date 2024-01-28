import '../config'

describe('Loading the module', () => {
  test('Returns expected value', async () => {
    const logger: any = (await import('log')).default
    expect(logger.constructor.name).toBe('Pino')
  })
})
