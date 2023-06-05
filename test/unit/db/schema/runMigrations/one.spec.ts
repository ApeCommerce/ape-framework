import 'test/unit/config';
import { listMigrations, runMigrations } from 'db/schema';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Running one migration', () => {
  test('Returns expected result', async () => {
    const list1 = await runMigrations(undefined, true);
    expect(list1).toStrictEqual([
      {
        bundleId: 'foo',
        migrationId: 'one',
      },
    ]);

    const list2 = await listMigrations();
    expect(list2).toStrictEqual([
      {
        bundleId: 'foo',
        migrationId: 'one',
        pending: false,
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
      {
        bundleId: 'bar',
        migrationId: 'one',
        pending: true,
      },
      {
        bundleId: 'bar',
        migrationId: 'two',
        pending: true,
      },
    ]);
  });
});
