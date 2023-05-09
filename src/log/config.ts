import env from 'framework/env';
import pino, { LoggerOptions } from 'pino';
import pretty from 'pino-pretty';

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

const level = Object.values(Level).find((l) => l === (env.logLevel || Level.info));
if (!level) { throw new Error(`Log: invalid level "${env.logLevel}"`); }

const destination = Object.values(Destination).find((d) => d === (env.logDestination || Destination.stdout));
if (!destination) { throw new Error(`Log: invalid destination "${env.logDestination}"`); }

const options: LoggerOptions = { level };

let stream;
if (destination === Destination.file) {
  stream = pino.destination(env.logFile || 'log.txt');
} else {
  stream = (env.logPretty ? pretty() : process.stdout);
}

export default {
  options,
  stream,
};
