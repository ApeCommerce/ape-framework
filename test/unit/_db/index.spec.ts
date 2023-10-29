import '../config';
import type { Database } from 'db';

describe('Loading the module', () => {
  test('Returns expected value', async () => {
    const db: Database = (await import('db')).default;
    expect(typeof db.raw).toBe('function');
    expect(typeof db.insert).toBe('function');
    expect(typeof db.select).toBe('function');
    expect(typeof db.update).toBe('function');
    expect(typeof db.delete).toBe('function');
  });
});
