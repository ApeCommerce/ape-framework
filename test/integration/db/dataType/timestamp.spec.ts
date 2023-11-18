import '../../config';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting timestamp data type', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.timestamp('one', 'null');
    });

    const data = [
      { one: null },
      { one: '1970-01-01 00:00:01.000' },
      { one: '2038-01-19 03:14:07.999' },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
