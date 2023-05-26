import 'test/unit/config';
import { loadModule } from 'utils';

describe('Loading the config', () => {
  test('Returns expected options', async () => {
    const config = await loadModule<any>('log/config');
    expect(config.options).toStrictEqual({
      level: 'silent',
    });
  });
});
