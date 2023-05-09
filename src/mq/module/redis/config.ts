import env from 'framework/env';

if (!env.mqRedisHost) { throw new Error('MQ: redis host not provided'); }

const commonOptions = {
  connection: {
    host: env.mqRedisHost,
    port: env.mqRedisPort || 6379,
    username: env.mqRedisUser || undefined,
    password: env.mqRedisPassword || undefined,
    enableOfflineQueue: false,
  },
  prefix: env.mqRedisPrefix,
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
