import { Bundle } from './bundle';
import { loadModule } from '../utils';
import config from './config';

export interface Boot {
  bundleModules: string[],
}

let bundles: Bundle[];

export const loadBundles = async () => {
  const boot = await loadModule<Boot>(config.module);
  bundles = await Promise.all(boot.bundleModules.map(loadModule<Bundle>));
  return bundles;
};

export const getBundles = async () => bundles || loadBundles();

export const getBundle = async (bundleId: string) => (await getBundles()).find((b) => b.bundleId === bundleId);

export default {
  loadBundles,
  getBundles,
  getBundle,
};