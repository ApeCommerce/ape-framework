import { getConfig } from '../../config';

const config = getConfig();

enum Module {
  bypass = 'bypass',
  redis = 'redis',
}

export const module = Object.values(Module).find((m) => m === config.mqModule);
if (!module) throw new Error(`MQ: invalid module "${config.mqModule}"`);

export default module;
