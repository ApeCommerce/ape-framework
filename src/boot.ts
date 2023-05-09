import { Command } from 'framework/cli';
import { loadModule } from 'framework/utils';
import { Migration } from 'framework/db/migration';
import { Queue } from 'framework/mq/module';
import { Route } from 'framework/api';
import { Translation } from 'framework/i18n';
import config from 'framework/config';

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
