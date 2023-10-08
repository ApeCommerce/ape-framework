import pino, { Logger } from 'pino';
import config from './config';

export { Logger };

const log: Logger = pino(config.options, config.stream);

export default log;
