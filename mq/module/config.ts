import { getConfig } from '../../config';
import BypassMq from './bypass';
import RedisMq from './redis';

const config = getConfig();

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
