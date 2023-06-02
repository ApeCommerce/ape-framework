import 'test/unit/config';
import { loadModule } from 'utils';

describe('Loading the migration config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('db/config/migration');
    expect(config).toStrictEqual({
      tablePrefix: '_migration',
    });
  });
});
