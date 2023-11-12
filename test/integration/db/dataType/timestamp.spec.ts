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
      table.timestamp('one');
    });

    const data = [
      { one: null },
      { one: '1970-01-01 00:00:01.000' },
      { one: '2038-01-01 00:00:00.000' },
      { one: '2001-02-03 04:05:06.007' },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    console.log('result', result);

    expect(result).toEqual(data);
  });
});
