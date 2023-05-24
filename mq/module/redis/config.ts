import config from '../../../config';

if (!config.mqRedisHost) throw new Error('MQ: redis host not provided');
if (!config.mqRedisPort) throw new Error('MQ: redis port not provided');

const commonOptions = {
  connection: {
    host: config.mqRedisHost,
    port: config.mqRedisPort,
    username: config.mqRedisUser || undefined,
    password: config.mqRedisPassword || undefined,
    enableOfflineQueue: false,
  },
  prefix: config.mqRedisPrefix,
};

const queueOptions = {
  ...commonOptions,
  defaultJobOptions: {
    removeOnComplete: true,
  },
};

const workerOptions = {
  ...commonOptions,
  autorun: false,
};

export default {
  queueOptions,
  workerOptions,
};
