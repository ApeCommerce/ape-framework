import pino from 'pino';
import { Log } from './log';
import config from './config';

export { Log };

const log: Log = pino(config.options, config.stream);

export default log;
