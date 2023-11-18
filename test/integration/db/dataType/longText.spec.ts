import '../../config';
import { randomString } from 'utils';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting longText', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.longText('one', 'null');
    });
    const data = [
      { one: null },
      { one: '' },
      { one: randomString(50000000) },
    ];
    await db('foo').insert(data);
    const result = await db('foo').select();
    expect(result).toEqual(data);
  });
});

describe('Inserting null in longText notNull', () => {
  test('Throws an error', async () => {
    await schema.createTable('foo', (table) => {
      table.longText('one', 'notNull');
    });
    expect.hasAssertions();
    try {
      await db('foo').insert({ one: null });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
