import BypassMq from './bypass';
import config from '../../config';
import RedisMq from './redis';

enum ModuleId {
  bypass = 'bypass',
  redis = 'redis',
}

const moduleId = Object.values(ModuleId).find((id) => id === config.mqModule);
if (!moduleId) throw new Error(`MQ: invalid module "${config.mqModule}"`);

const classes: { [moduleId in ModuleId]: typeof BypassMq | typeof RedisMq } = {
  bypass: BypassMq,
  redis: RedisMq,
};

export const MqModuleClass = classes[moduleId];

export default {
  moduleId,
};
