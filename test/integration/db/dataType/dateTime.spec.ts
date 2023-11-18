import '../../config';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting dateTime', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.dateTime('one', 'null');
    });
    const data = [
      { one: null },
      { one: '1000-01-01 00:00:00.000' },
      { one: '9999-12-31 23:59:59.999' },
    ];
    await db('foo').insert(data);
    const result = await db('foo').select();
    expect(result).toEqual(data);
  });
});

describe('Inserting null in dateTime notNull', () => {
  test('Throws an error', async () => {
    await schema.createTable('foo', (table) => {
      table.dateTime('one', 'notNull');
    });
    expect.hasAssertions();
    try {
      await db('foo').insert({ one: null });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
