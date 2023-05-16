import BypassMq from './bypass';
import config from '../../config';
import RedisMq from './redis';

export enum ModuleId {
  bypass = 'bypass',
  redis = 'redis',
}

const id = Object.values(ModuleId).find((moduleId) => moduleId === config.mqModule);
if (!id) { throw new Error(`MQ: invalid module "${config.mqModule}"`); }

export const moduleId = id;

const classes: { [moduleId in ModuleId]: typeof BypassMq | typeof RedisMq } = {
  bypass: BypassMq,
  redis: RedisMq,
};

export const MqModuleClass = classes[moduleId];

export default {
  moduleId,
};
