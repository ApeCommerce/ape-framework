import path from 'path';
import { Bundle } from './bundle';
import config from './config';
import node from '../node';

export interface Boot {
  bundles: () => Promise<Bundle[]>,
}

let bundles: Bundle[];

export const loadBundles = async () => {
  const boot: Boot = (await import(path.join(process.cwd(), node.path, config.module))).default;
  bundles = await boot.bundles();
  return bundles;
};

export const getBundles = async () => bundles || loadBundles();

export const getBundle = async (bundleId: string) => (await getBundles()).find((b) => b.bundleId === bundleId);

export default {
  loadBundles,
  getBundles,
  getBundle,
};
