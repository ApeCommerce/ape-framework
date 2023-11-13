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
      { one: '2000-01-01 00:00:00.000' },
      { one: '2037-12-31 23:59:59.999' },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
