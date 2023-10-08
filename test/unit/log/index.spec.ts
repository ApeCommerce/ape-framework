import '../config';

describe('Loading the module', () => {
  test('Returns expected value', async () => {
    const log: any = (await import('log')).default;
    expect(log.constructor.name).toBe('Pino');
  });
});
