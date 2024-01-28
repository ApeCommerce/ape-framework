import '../../../config'
import { listMigrations, runMigrations } from 'db/schema'
import db from 'db'

afterAll(async () => {
  await db.destroy()
})

describe('Running bundle migrations', () => {
  test('Returns expected value', async () => {
    const list1 = await runMigrations('foo')
    expect(list1).toStrictEqual([
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
    ])

    const list2 = await listMigrations()
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
    ])
  })
})
