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

describe('Inserting / selecting mediumText data type', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.mediumText('one');
    });

    const data = [
      { one: null },
      { one: '' },
      { one: randomString(16000000) },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
