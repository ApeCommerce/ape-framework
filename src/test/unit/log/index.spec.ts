import 'test/unit/config';

describe('Loading the module', () => {
  test('Returns an instance of Pino', async () => {
    const log: any = (await import('log')).default;
    expect(log.constructor.name).toBe('Pino');
  });
});
