import 'test/unit/config';
import { listMigrations, runMigrations } from 'db/schema';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Running bundle migrations', () => {
  test('Returns expected result', async () => {
    const list = await runMigrations('foo');
    expect(list).toStrictEqual([
      {
        bundleId: 'foo',
        migrationId: 'one',
      },
      {
        bundleId: 'foo',
        migrationId: 'two',
      },
      {
        bundleId: 'foo',
        migrationId: 'three',
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
        pending: false,
      },
      {
        bundleId: 'foo',
        migrationId: 'three',
        pending: false,
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
