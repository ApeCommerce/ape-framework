import 'test/unit/config';
import { listMigrations } from 'db/schema';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Listing bundle migrations', () => {
  test('Returns expected result', async () => {
    const list = await listMigrations('foo');
    expect(list).toStrictEqual([
      {
        bundleId: 'foo',
        migrationId: 'one',
        pending: true,
      },
      {
        bundleId: 'foo',
        migrationId: 'two',
        pending: true,
      },
      {
        bundleId: 'foo',
        migrationId: 'three',
        pending: true,
      },
    ]);
  });
});
