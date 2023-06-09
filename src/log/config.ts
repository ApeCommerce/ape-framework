import pino, { LoggerOptions as Options } from 'pino';
import pretty from 'pino-pretty';
import { getConfig } from '../config';

enum Level {
  debug = 'debug',
  error = 'error',
  fatal = 'fatal',
  info = 'info',
  silent = 'silent',
  trace = 'trace',
  warn = 'warn',
}

enum Destination {
  file = 'file',
  stdout = 'stdout',
}

const config = getConfig();

const level = Object.values(Level).find((l) => l === config.logLevel);
if (!level) throw new Error(`Log: invalid level "${config.logLevel}"`);

const destination = Object.values(Destination).find((d) => d === config.logDestination);
if (!destination) throw new Error(`Log: invalid destination "${config.logDestination}"`);

const options: Options = { level };

let stream;
if (destination === Destination.file) {
  if (!config.logFile) throw new Error('Log: file not provided');
  stream = pino.destination(config.logFile);
} else {
  stream = config.logPretty ? pretty() : process.stdout;
}

export default {
  options,
  stream,
};
