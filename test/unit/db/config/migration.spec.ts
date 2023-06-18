import { loadModule } from 'utils';

describe('Loading the schema config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('db/schema/config');
    expect(config).toStrictEqual({
      tablePrefix: '_schema',
    });
  });
});
