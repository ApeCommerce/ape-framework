import knex from 'knex';
import { Database } from './database';
import config from './config';
import postProcessResponse from './postProcessResponse';

const database: Database = knex({
  ...config,
  postProcessResponse,
});

export default database;
