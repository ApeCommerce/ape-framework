import knex from 'knex';
import { Database } from './database';
import config from './config';
import log from '../log';
import postProcessResponse from './postProcessResponse';

if (config.pool) {
  config.pool.afterCreate = (connection: any, done: Function) => {
    log.debug('db: new connection');
    done(undefined, connection);
  };
}

config.postProcessResponse = postProcessResponse;

const database: Database = knex(config);

export default database;
