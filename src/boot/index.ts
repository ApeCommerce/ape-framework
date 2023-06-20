import path from 'path';
import { Bundle } from './bundle';
import { loadModule } from '../utils';
import config from './config';
import node from '../node';

export interface Boot {
  bundleModules: string[],
}

let bundles: Bundle[];

export const loadBundles = async () => {
  const boot = await loadModule<Boot>(path.join(process.cwd(), node.path, config.module));
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
