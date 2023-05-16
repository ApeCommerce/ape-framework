import { Bundle } from '../boot/bundle';
import { getBundle, getBundles } from '../boot';
import { migrationConfig } from './config';
import db, { Migration } from '.';

export interface BundleMigration {
  bundleId: string,
  migrationId: string,
  pending?: boolean,
}

class MigrationSource {
  private bundle: Bundle;

  constructor(bundle: Bundle) {
    this.bundle = bundle;
  }

  getMigrations() {
    return Promise.resolve(this.bundle.migrations);
  }

  getMigrationName(migration: Migration) {
    return migration.migrationId;
  }

  getMigration(migration: Migration) {
    return Promise.resolve(migration);
  }
}

const config = (bundle: Bundle) => ({
  migrationSource: new MigrationSource(bundle),
  tableName: `${migrationConfig.tablePrefix}_${bundle.bundleId}`,
});

const filterBundles = async (bundleId?: string, reverse?: boolean, one?: boolean) => {
  const bundles: Bundle[] = [];
  if (bundleId) {
    const bundle = await getBundle(bundleId);
    if (bundle) { bundles.push(bundle); }
  } else {
    bundles.push(...await getBundles());
  }
  const result = bundles.filter((b) => b.migrations.length > 0);
  if (reverse) { result.reverse(); }
  return result.slice(0, one ? 1 : undefined);
};

export const listMigrations = async (bundleId?: string, pendingOnly?: boolean) => {
  const bundleMigrations: BundleMigration[] = [];
  for (const bundle of await filterBundles(bundleId)) {
    const result = await db.migrate.list(config(bundle));
    const done: { name: string }[] = result[0];
    const pending: Migration[] = result[1];
    if (!pendingOnly) {
      done.forEach((migration) => bundleMigrations.push({
        bundleId: bundle.bundleId,
        migrationId: migration.name,
      }));
    }
    pending.forEach((migration) => bundleMigrations.push({
      bundleId: bundle.bundleId,
      migrationId: migration.migrationId,
      pending: true,
    }));
  }
  return bundleMigrations;
};

export const runMigrations = async (bundleId?: string, one?: boolean) => {
  const bundleMigrations: BundleMigration[] = [];
  for (const bundle of await filterBundles(bundleId, false, one)) {
    const result = one
      ? await db.migrate.up(config(bundle))
      : await db.migrate.latest(config(bundle));
    const done: string[] = result[1];
    done.forEach((migration) => bundleMigrations.push({
      bundleId: bundle.bundleId,
      migrationId: migration,
    }));
  }
  return bundleMigrations;
};

export const rollbackMigrations = async (bundleId?: string, one?: boolean) => {
  const bundleMigrations: BundleMigration[] = [];
  for (const bundle of await filterBundles(bundleId, true, one)) {
    const result = one
      ? await db.migrate.down(config(bundle))
      : await db.migrate.rollback(config(bundle));
    const done: string[] = result[1];
    done.forEach((migration) => bundleMigrations.push({
      bundleId: bundle.bundleId,
      migrationId: migration,
    }));
  }
  return bundleMigrations;
};

export default {
  listMigrations,
  runMigrations,
  rollbackMigrations,
};
