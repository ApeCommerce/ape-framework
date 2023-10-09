import { Configuration } from './configuration';

export interface Config {
  initConfig: (override?: any, file?: string) => Configuration,
  getConfig: () => Configuration,
}
