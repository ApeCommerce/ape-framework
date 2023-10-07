import path from 'path';
import { Boot } from './boot';
import { Bundle } from './bundle';
import config from './config';
import node from '../node';

export { Boot, Bundle };

let bundles: Bundle[];

export const loadBundles = async () => {
  const boot: Boot = (await import(path.join(process.cwd(), node.path, config.module))).default;
  bundles = await boot.bundles();
  return bundles;
};

export const getBundles = async () => bundles || loadBundles();

export const getBundle = async (bundleId: string) => (await getBundles()).find((b) => b.bundleId === bundleId);

export default {
  getBundle,
  getBundles,
  loadBundles,
};
