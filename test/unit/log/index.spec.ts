import 'test/unit/config';
import { loadModule } from 'utils';

describe('Loading the module', () => {
  test('Returns an instance of Pino', async () => {
    const log = await loadModule<any>('log');
    expect(log.constructor.name).toBe('Pino');
  });
});
