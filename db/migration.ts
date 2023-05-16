import { Knex as Database } from 'knex';

export interface Migration {
  migrationId: string,
  up: (db: Database) => Promise<void>,
  down: (db: Database) => Promise<void>,
}
