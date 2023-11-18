import '../../config';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting bigInt data type', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.bigInt('one', 'null');
    });

    const data = [
      { one: null },
      { one: 0 },
      { one: 9000000000000000 },
      { one: -9000000000000000 },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
