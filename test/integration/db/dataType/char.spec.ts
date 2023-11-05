import '../../config';
import { randomString } from 'utils';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting char data type', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.char('one', 255);
    });

    const data = [
      { one: null },
      { one: '' },
      { one: randomString(255) },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
