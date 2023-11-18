import '../../config';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting double data type', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.double('one', 'null');
    });

    const data = [
      { one: null },
      { one: 0 },
      { one: 99999999999999.9 },
      { one: -99999999999999.9 },
      { one: 0.00000000000001 },
      { one: -0.00000000000001 },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
