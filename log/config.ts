import pino, { LoggerOptions } from 'pino';
import pretty from 'pino-pretty';
import config from '../config';

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

const level = Object.values(Level).find((l) => l === config.logLevel);
if (!level) { throw new Error(`Log: invalid level "${config.logLevel}"`); }

const destination = Object.values(Destination).find((d) => d === config.logDestination);
if (!destination) { throw new Error(`Log: invalid destination "${config.logDestination}"`); }

const options: LoggerOptions = { level };

let stream;
if (destination === Destination.file) {
  stream = pino.destination(config.logFile);
} else {
  stream = config.logPretty ? pretty() : process.stdout;
}

export default {
  options,
  stream,
};
