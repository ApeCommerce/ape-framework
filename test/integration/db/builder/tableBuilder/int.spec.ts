import '../../../config';
import db, { SchemaBuilder } from 'db';

const builder = new SchemaBuilder(db);

afterEach(async () => {
  await builder.dropTableIfExists('one');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting int data type', () => {
  test('Returns expected value', async () => {
    await builder.createTable('one', (table) => {
      table.int('foo');
    });

    await db('one').insert([
      { foo: 2000000000 },
    ]);

    const select = await db('one').select();

    expect(select).toEqual([
      { foo: 2000000000 },
    ]);
  });
});
