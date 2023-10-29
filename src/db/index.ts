import knex from 'knex';
import config from './config';
import log from '../log';
import postProcessResponse from './postProcessResponse';
import { ColumnBuilder } from './builder/columnBuilder';
import { SchemaBuilder } from './builder/schemaBuilder';
import { TableBuilder } from './builder/tableBuilder';
import type { Database } from './database';
import type { Migration } from './schema/migration';
import type { MigrationList } from './schema/migrationList';
import type { Schema } from './schema/schema';

export { ColumnBuilder, Database, Migration, MigrationList, Schema, SchemaBuilder, TableBuilder };

if (config.pool) {
  config.pool.afterCreate = (connection: any, done: Function) => {
    log.debug('db: new connection');
    done(undefined, connection);
  };
}

config.postProcessResponse = postProcessResponse;

const database: Database = knex(config);

export default database;
