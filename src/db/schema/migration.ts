import Knex from '../knex';

export interface Migration {
  migrationId: string,
  up: (db: Knex) => Promise<void>,
  down: (db: Knex) => Promise<void>,
}

export default Migration;
