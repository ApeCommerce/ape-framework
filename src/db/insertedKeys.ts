import { module, Module } from './config';
import type { Database } from '.';

type PrepareQuery = (primaryColumn: string, query: Database.QueryBuilder) => Database.QueryBuilder;

type ProcessResult = (result: any) => number[];

const prepareQueryHandler: { [module in Exclude<Module, Module.memory>]: PrepareQuery } = {
  mysql: (_, query) => query,
  postgres: (primaryColumn, query) => query.returning(primaryColumn),
  sqlite: (_, query) => query,
};

const processResultHandler: { [module in Exclude<Module, Module.memory>]: ProcessResult } = {
  mysql: (result) => {
    console.log('result', result);
    return result;
  },
  postgres: () => [],
  sqlite: () => [],
};

const prepareQuery: PrepareQuery = (primaryColumn, query) => {
  const prepare: { [module in Module]: PrepareQuery } = {
    ...prepareQueryHandler,
    memory: prepareQueryHandler.sqlite,
  };
  return prepare[module](primaryColumn, query);
};

const processResult: ProcessResult = (result) => {
  const process: { [module in Module]: ProcessResult } = {
    ...processResultHandler,
    memory: processResultHandler.sqlite,
  };
  return process[module](result);
};

const insertedKeys = async (primaryColumn: string, query: Database.QueryBuilder) => {
  const result = await prepareQuery(primaryColumn, query);
  return processResult(result);
};

export default insertedKeys;
