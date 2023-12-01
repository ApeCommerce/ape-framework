import { getConfig } from '../../config'
import postProcessResponse from '../postProcess'
import type { Database } from '../database'

const dbConfig: () => Database.Config = () => {
  const config = getConfig()

  if (!config.dbSqliteFile) throw new Error('db: sqlite file not provided')

  return {
    client: 'sqlite3',
    connection: {
      filename: config.dbSqliteFile,
    },
    pool: { min: 0, max: 1 },
    postProcessResponse,
  }
}

export default dbConfig
