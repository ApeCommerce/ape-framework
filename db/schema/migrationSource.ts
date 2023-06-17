import { Bundle } from '../../boot/bundle';
import { Migration } from './migration';

export class MigrationSource {
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

export default MigrationSource;
