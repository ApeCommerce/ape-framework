import '../../../config';
import db, { SchemaBuilder } from 'db';

const builder = new SchemaBuilder(db);

afterEach(async () => {
  await builder.dropTableIfExists('one');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting bigInt data type', () => {
  test('Returns expected value', async () => {
    await builder.createTable('one', (table) => {
      table.bigInt('foo');
    });

    await db('one').insert([
      { foo: 9000000000000000 },
    ]);

    const select = await db('one').select();

    expect(select).toEqual([
      { foo: 9000000000000000 },
    ]);
  });
});
