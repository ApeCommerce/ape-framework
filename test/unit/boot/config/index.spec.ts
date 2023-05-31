import 'test/unit/config';
import { loadModule } from 'utils';

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('boot/config');
    expect(config).toStrictEqual({
      module: 'test/fixture/boot',
    });
  });
});
