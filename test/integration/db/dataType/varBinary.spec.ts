import '../../config';
import { randomBytes } from 'crypto';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting varBinary', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.varBinary('one', 65000, 'null');
    });
    const data = [
      { one: null },
      { one: randomBytes(65000) },
    ];
    await db('foo').insert(data);
    const result = await db('foo').select();
    expect(result).toEqual(data);
  });
});

describe('Inserting null in varBinary notNull', () => {
  test('Throws an error', async () => {
    await schema.createTable('foo', (table) => {
      table.varBinary('one', 65000, 'notNull');
    });
    expect.hasAssertions();
    try {
      await db('foo').insert({ one: null });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});