import config from 'db/config';
import knex, { Knex } from 'knex';

export interface Database extends Knex { }
export interface Transaction extends Knex.Transaction { }
export interface ColumnBuilder extends Knex.ColumnBuilder { }

const boolColumnRegex = /^is[A-Z]/;

const filterBoolColumns = (columns: string[]) => columns.filter((c) => c.match(boolColumnRegex));

const postProcessRow = (row: any, boolColumns: string[]) => {
  boolColumns.forEach((column) => { row[column] = !!row[column]; });
  return row;
};

const postProcessResponse = (result: any) => {
  if (Array.isArray(result)) {
    return result.map((row) => postProcessRow(row, filterBoolColumns(Object.keys(result[0]))));
  }
  if (result) {
    return postProcessRow(result, filterBoolColumns(Object.keys(result)));
  }
  return result;
};

export default knex({
  ...config,
  postProcessResponse,
});
