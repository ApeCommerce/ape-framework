import '../../config';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting date data type', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.date('one', 'null');
    });

    const data = [
      { one: null },
      { one: '1000-01-01' },
      { one: '9999-12-31' },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
