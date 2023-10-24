import pino from 'pino';
import config from './config';
import type { Logger } from './logger';

export { Logger };

const logger: Logger = pino(config.options, config.stream);

export default logger;
