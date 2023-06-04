import 'test/unit/config';
import { listMigrations, runMigrations } from 'db/schema';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Running one migration', () => {
  test('Returns expected result', async () => {
    const list = await runMigrations(undefined, true);
    expect(list).toStrictEqual([
      {
        bundleId: 'foo',
        migrationId: 'one',
      },
    ]);
    expect(await listMigrations()).toStrictEqual([
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
