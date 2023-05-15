import { Command } from '../cli';
import { loadModule } from '../utils';
import { Migration } from '../db/migration';
import { Queue } from '../mq/module';
import { Route } from '../api';
import { Translation } from '../i18n/translation';
import config from './config';

export interface Boot {
  bundleModules: string[],
}

export interface Bundle {
  bundleId: string,
  name: string,
  routes: Route[],
  migrations: Migration[],
  queues: Queue[],
  commands: Command[],
  translations: Translation[],
}

let bundles: Bundle[];

const loadBundles = async () => {
  const boot = await loadModule<Boot>(config.bootModule);
  return Promise.all(boot.bundleModules.map(loadModule<Bundle>));
};

export const getBundles = async () => bundles || loadBundles();

export const getBundle = async (bundleId: string) => (await getBundles())
  .find((b) => b.bundleId === bundleId);

export default {
  getBundle,
  getBundles,
};
