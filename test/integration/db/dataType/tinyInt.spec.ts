import '../../config';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting tinyInt data type', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.tinyInt('one', 'null');
    });

    const data = [
      { one: null },
      { one: 0 },
      { one: 120 },
      { one: -120 },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
