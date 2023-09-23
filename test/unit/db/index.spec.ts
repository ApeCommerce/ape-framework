import '../config';
import Knex from 'db/knex';

describe('Loading the module', () => {
  test('Returns an instance of Knex', async () => {
    const db: Knex = (await import('db')).default;
    expect(typeof db.raw).toBe('function');
    expect(typeof db.insert).toBe('function');
    expect(typeof db.select).toBe('function');
    expect(typeof db.update).toBe('function');
    expect(typeof db.delete).toBe('function');
  });
});
