import knex from 'knex';
import config from './config';
import log from '../log';
import postProcessResponse from './postProcessResponse';
import type { Database } from './database';

if (config.pool) {
  config.pool.afterCreate = (connection: any, done: Function) => {
    log.debug('db: new connection');
    done(undefined, connection);
  };
}

config.postProcessResponse = postProcessResponse;

const database: Database = knex(config);

export default database;
