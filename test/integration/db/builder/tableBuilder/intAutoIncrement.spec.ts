import '../../../config';
import db, { SchemaBuilder } from 'db';

const builder = new SchemaBuilder(db);

afterEach(async () => {
  await builder.dropTableIfExists('one');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting intAutoincrement data type', () => {
  test('Returns expected value', async () => {
    await builder.createTable('one', (table) => {
      table.intAutoIncrement('foo');
      table.int('bar');
    });

    await db('one').insert([
      { bar: 1 },
      { bar: 2 },
    ]);

    const select = await db('one').select();

    expect(select).toEqual([
      { foo: 1, bar: 1 },
      { foo: 2, bar: 2 },
    ]);
  });
});
