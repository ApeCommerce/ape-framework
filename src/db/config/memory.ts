import postProcessResponse from '../postProcess';
import type { Database } from '../database';

const dbConfig: () => Database.Config = () => ({
  client: 'sqlite3',
  connection: {
    filename: ':memory:',
  },
  pool: { min: 0, max: 1 },
  useNullAsDefault: true,
  postProcessResponse,
});

export default dbConfig;
