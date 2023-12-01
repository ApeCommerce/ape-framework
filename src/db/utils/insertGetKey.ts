import { module, Module } from '../config'
import type { Database } from '..'

type PrepareQuery = (
  query: Database.QueryBuilder,
  primaryColumn: string
) => Database.QueryBuilder

type ProcessResult = (
  result: any,
  count: number,
  primaryColumn: string
) => number[]

const prepareQueryHandler: { [module in Exclude<Module, 'memory'>]: PrepareQuery } = {
  mysql: (query) => query,
  postgres: (query, primaryColumn) => query.returning(primaryColumn),
  sqlite: (query) => query,
}

const processResultHandler: {
  [module in Exclude<Module, 'memory'>]: ProcessResult
} = {
  mysql: (result, count) => {
    const keys = []
    for (let i = result[0]; i < result[0] + count; i += 1) {
      keys.push(i)
    }
    return keys
  },
  postgres: (result, count, primaryColumn) => result.map(
    (record: any) => record[primaryColumn],
  ),
  sqlite: (result, count) => {
    const keys = []
    for (let i = result[0] - count; i < result[0]; i += 1) {
      keys.push(i + 1)
    }
    return keys
  },
}

const prepareQuery: PrepareQuery = (primaryColumn, query) => {
  const prepare: { [module in Module]: PrepareQuery } = {
    ...prepareQueryHandler,
    memory: prepareQueryHandler.sqlite,
  }
  return prepare[module](primaryColumn, query)
}

const processResult: ProcessResult = (result, count, primaryColumn) => {
  const process: { [module in Module]: ProcessResult } = {
    ...processResultHandler,
    memory: processResultHandler.sqlite,
  }
  return process[module](result, count, primaryColumn)
}

export const insertGetKeys = async <Record extends object = any>(
  query: Database.QueryBuilder,
  primaryColumn: string,
  data: Partial<Record>[],
) => {
  const result = await prepareQuery(query.insert(data), primaryColumn)
  return processResult(result, data.length, primaryColumn)
}

export const insertGetKey = async <Record extends object = any>(
  query: Database.QueryBuilder,
  primaryColumn: string,
  data: Partial<Record>,
) => {
  const result = await prepareQuery(query.insert(data), primaryColumn)
  return processResult(result, 1, primaryColumn)[0]
}

export default {
  insertGetKey,
  insertGetKeys,
}
