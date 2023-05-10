import { Command } from 'cli';
import { loadModule } from 'utils';
import { Migration } from 'db/migration';
import { Queue } from 'mq/module';
import { Route } from 'api';
import { Translation } from 'i18n';
import config from 'config';

export interface Boot {
  bundlePaths: string[],
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

export const getBundles = async () => {
  if (bundles) { return bundles; }
  const boot = await loadModule<Boot>(config.bootModule);
  bundles = await Promise.all(boot.bundlePaths.map(loadModule<Bundle>));
  return bundles;
};

export const getBundle = async (bundleId: string) => (await getBundles()).find((b) => b.bundleId === bundleId);

export default {
  getBundle,
  getBundles,
};
