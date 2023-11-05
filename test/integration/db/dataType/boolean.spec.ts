import '../../config';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting boolean data type', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.boolean('isOne');
    });

    const data = [
      { isOne: null },
      { isOne: true },
      { isOne: false },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
