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
      table.boolean('hasOne');
    });

    await db('foo').insert([
      { isOne: null, hasOne: null },
      { isOne: true, hasOne: true },
      { isOne: false, hasOne: false },
      { isOne: 1, hasOne: 1 },
      { isOne: 0, hasOne: 0 },
    ]);

    const result = await db('foo').select();

    expect(result).toEqual([
      { isOne: null, hasOne: null },
      { isOne: true, hasOne: true },
      { isOne: false, hasOne: false },
      { isOne: true, hasOne: true },
      { isOne: false, hasOne: false },
    ]);
  });
});
