import '../../config';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting decimal data type', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.decimal('one', 15, 0);
      table.decimal('two', 15, 1);
      table.decimal('three', 15, 14);
    });

    const data = [
      { one: null, two: null, three: null },
      { one: 0, two: 0, three: 0 },
      { one: 999999999999999, two: 99999999999999.9, three: 0.00000000000001 },
      { one: -999999999999999, two: -99999999999999.9, three: -0.00000000000001 },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
