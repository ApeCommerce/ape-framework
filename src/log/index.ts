import config from 'framework/log/config';
import pino from 'pino';

export default pino(config.options, config.stream);
