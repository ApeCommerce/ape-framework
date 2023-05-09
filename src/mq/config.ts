import BypassMq from 'framework/mq/module/bypass';
import env from 'framework/env';
import RedisMq from 'framework/mq/module/redis';

enum Module {
  bypass = 'bypass',
  redis = 'redis',
}

const module = Object.values(Module).find((m) => m === (env.mqModule || Module.bypass));
if (!module) { throw new Error(`MQ: invalid module "${env.mqModule}"`); }

const classes: { [module in Module]: typeof BypassMq | typeof RedisMq } = {
  bypass: BypassMq,
  redis: RedisMq,
};

export default classes[module];
