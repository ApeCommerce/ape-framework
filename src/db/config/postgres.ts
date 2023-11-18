import fs from 'fs-extra';
import { types } from 'pg';
import { getConfig } from '../../config';
import type { Database } from '../database';

const dbConfig: () => Database.Config = () => {
  const config = getConfig();

  if (!config.dbPostgresHost) throw new Error('db: postgres host not provided');
  if (!config.dbPostgresPort) throw new Error('db: postgres port not provided');
  if (!config.dbPostgresDatabase) throw new Error('db: postgres database not provided');

  const timeRegex = /^(.{8})(\..{0,3})?/;
  const timestampRegex = /^(.{19})(\..{0,3})?/;

  let timeParserMatch: any;

  const timeParser = (regex: RegExp) => (value: string) => {
    timeParserMatch = value.match(regex);
    return timeParserMatch
      ? `${timeParserMatch[1]}${timeParserMatch[2] ? timeParserMatch[2].padEnd(4, '0') : '.000'}`
      : value;
  };

  types.setTypeParser(types.builtins.BPCHAR, (value: string) => value.trimEnd());
  types.setTypeParser(types.builtins.DATE, (value: string) => value);
  types.setTypeParser(types.builtins.INT8, (value: string) => parseInt(value, 10));
  types.setTypeParser(types.builtins.NUMERIC, (value: string) => parseFloat(value));
  types.setTypeParser(types.builtins.TIME, timeParser(timeRegex));
  types.setTypeParser(types.builtins.TIMESTAMP, timeParser(timestampRegex));

  return {
    client: 'pg',
    connection: {
      host: config.dbPostgresHost,
      port: config.dbPostgresPort,
      ...(config.dbPostgresUser ? { user: config.dbPostgresUser } : {}),
      ...(config.dbPostgresPassword ? { password: config.dbPostgresPassword } : {}),
      database: config.dbPostgresDatabase,
      ...(config.dbPostgresSsl ? {
        ssl: {
          ...(config.dbPostgresSslCa ? { ca: fs.readFileSync(config.dbPostgresSslCa).toString() } : {}),
          ...(config.dbPostgresSslCert ? { cert: fs.readFileSync(config.dbPostgresSslCert).toString() } : {}),
          ...(config.dbPostgresSslKey ? { key: fs.readFileSync(config.dbPostgresSslKey).toString() } : {}),
          rejectUnauthorized: config.dbPostgresSslVerify,
        },
      } : {}),
    },
    pool: { min: 0, max: config.dbPostgresPoolMax },
  };
};

export default dbConfig;
