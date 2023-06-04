import { Bundle } from '../boot/bundle';
import { getBundle, getBundles } from '../boot';
import { Migration } from './migration';
import config from './config/migration';
import db from '.';

export type MigrationList = {
  bundleId: string,
  migrationId: string,
  pending?: boolean,
}[];

class MigrationSource {
  private bundle: Bundle;

  constructor(bundle: Bundle) {
    this.bundle = bundle;
  }

  getMigrations() {
    return Promise.resolve(this.bundle.migrations as Migration[]);
  }

  getMigrationName(migration: Migration) {
    return migration.migrationId;
  }

  getMigration(migration: Migration) {
    return Promise.resolve(migration);
  }
}

const bundleConfig = (bundle: Bundle) => ({
  migrationSource: new MigrationSource(bundle),
  tableName: `${config.tablePrefix}_${bundle.bundleId}`,
});

const filterBundles = async (bundleId?: string, reverse?: boolean, one?: boolean) => {
  const bundles: Bundle[] = [];
  if (bundleId) {
    const bundle = await getBundle(bundleId);
    if (bundle) bundles.push(bundle);
  } else {
    bundles.push(...await getBundles());
  }
  const result = bundles.filter((b) => (b.migrations || []).length);
  if (reverse) result.reverse();
  return result.slice(0, one ? 1 : undefined);
};

export const listMigrations = async (bundleId?: string, pendingOnly?: boolean) => {
  const migrationList: MigrationList = [];
  for (const bundle of await filterBundles(bundleId)) {
    const result = await db.migrate.list(bundleConfig(bundle));
    const done: { name: string }[] = result[0];
    const pending: Migration[] = result[1];
    if (!pendingOnly) {
      done.forEach((migration) => migrationList.push({
        bundleId: bundle.bundleId,
        migrationId: migration.name,
        pending: false,
      }));
    }
    pending.forEach((migration) => migrationList.push({
      bundleId: bundle.bundleId,
      migrationId: migration.migrationId,
      pending: true,
    }));
  }
  return migrationList;
};

export const runMigrations = async (bundleId?: string, one?: boolean) => {
  const migrationList: MigrationList = [];
  for (const bundle of await filterBundles(bundleId, false, one)) {
    const result = one
      ? await db.migrate.up(bundleConfig(bundle))
      : await db.migrate.latest(bundleConfig(bundle));
    const done: string[] = result[1];
    done.forEach((migration) => migrationList.push({
      bundleId: bundle.bundleId,
      migrationId: migration,
    }));
  }
  return migrationList;
};

export const rollbackMigrations = async (bundleId?: string, one?: boolean) => {
  const migrationList: MigrationList = [];
  for (const bundle of await filterBundles(bundleId, true, one)) {
    const result = one
      ? await db.migrate.down(bundleConfig(bundle))
      : await db.migrate.rollback(bundleConfig(bundle));
    const done: string[] = result[1];
    done.forEach((migration) => migrationList.push({
      bundleId: bundle.bundleId,
      migrationId: migration,
    }));
  }
  return migrationList;
};

export default {
  listMigrations,
  runMigrations,
  rollbackMigrations,
};
