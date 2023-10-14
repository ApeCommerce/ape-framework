import pino from 'pino';
import { Logger } from './logger';
import config from './config';

export { Logger };

const logger: Logger = pino(config.options, config.stream);

export default logger;
