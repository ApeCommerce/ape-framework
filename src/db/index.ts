import knex from 'knex';
import { ColumnBuilder } from './schema/builder/column';
import { SchemaBuilder } from './schema/builder';
import { TableBuilder } from './schema/builder/table';
import config from './config';
import log from '../log';
import type { Database } from './database';
import type { Migration } from './schema/migration';
import type { MigrationList } from './schema/migrationList';
import type { Schema } from './schema/schema';

export { ColumnBuilder, Database, Migration, MigrationList, Schema, SchemaBuilder, TableBuilder };

config.pool = {
  ...config.pool,
  afterCreate: (connection: any, done: Function) => {
    log.debug('db: new connection');
    done(undefined, connection);
  },
};

const database: Database = knex(config);

export default database;
