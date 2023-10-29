import '../../../config';
import db, { SchemaBuilder } from 'db';

const builder = new SchemaBuilder(db);

afterEach(async () => {
  await builder.dropTableIfExists('one');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting boolean data type', () => {
  test('Returns expected value', async () => {
    await builder.createTable('one', (table) => {
      table.boolean('isFoo');
    });

    await db('one').insert([
      { isFoo: true },
      { isFoo: false },
      { isFoo: null },
    ]);

    const select = await db('one').select();

    expect(select).toEqual([
      { isFoo: true },
      { isFoo: false },
      { isFoo: null },
    ]);
  });
});
