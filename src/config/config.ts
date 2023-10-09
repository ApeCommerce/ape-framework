import { Configuration } from './configuration';

export interface Config {
  initConfig: (override?: Partial<Configuration>, file?: string) => Configuration,
  getConfig: () => Configuration,
}
