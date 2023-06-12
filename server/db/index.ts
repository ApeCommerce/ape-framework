import knex from 'knex';
import config from './config';
import postProcessResponse from './postProcess';

export default knex({
  ...config,
  postProcessResponse,
});
