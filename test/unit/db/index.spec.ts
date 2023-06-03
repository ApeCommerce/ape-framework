import 'test/unit/config';
import { Knex } from 'knex';
import { loadModule } from 'utils';

describe('Loading the module', () => {
  test('Returns an instance of Knex', async () => {
    const db = await loadModule<Knex>('db');
    expect(typeof db.select).toBe('function');
    expect(typeof db.insert).toBe('function');
    expect(typeof db.update).toBe('function');
  });
});
