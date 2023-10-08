import '../../../config';
import { listMigrations, runMigrations } from 'db/schema';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Listing bundle migrations', () => {
  test('Returns expected value', async () => {
    const list1 = await listMigrations('foo');
    expect(list1).toStrictEqual([
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

    await runMigrations('foo');
    const list2 = await listMigrations('foo');
    expect(list2).toStrictEqual([
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
    ]);

    const list3 = await listMigrations('bar');
    expect(list3).toStrictEqual([
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

    await runMigrations('bar', true);
    const list4 = await listMigrations('bar');
    expect(list4).toStrictEqual([
      {
        bundleId: 'bar',
        migrationId: 'one',
        pending: false,
      },
      {
        bundleId: 'bar',
        migrationId: 'two',
        pending: true,
      },
    ]);
  });
});
