import '../../config';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting smallInt', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.smallInt('one', 'null');
    });
    const data = [
      { one: null },
      { one: 0 },
      { one: 32000 },
      { one: -32000 },
    ];
    await db('foo').insert(data);
    const result = await db('foo').select();
    expect(result).toEqual(data);
  });
});

describe('Inserting null in smallInt notNull', () => {
  test('Throws an error', async () => {
    await schema.createTable('foo', (table) => {
      table.smallInt('one', 'notNull');
    });
    expect.hasAssertions();
    try {
      await db('foo').insert({ one: null });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
