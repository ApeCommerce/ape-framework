import path from 'path';
import { App } from './app';
import { Boot } from './boot';
import { Bundle } from './bundle';
import config from './config';
import node from '../config/node';

export { App, Boot, Bundle };

let bundles: Bundle[];

export const loadBundles = async () => {
  const boot: Boot = (await import(path.join(process.cwd(), node.path, config.boot))).default;
  bundles = await boot.bundles();
  return bundles;
};

export const getBundles = async () => bundles || loadBundles();

export const getBundle = async (bundleId: string) => (await getBundles()).find((b) => b.bundleId === bundleId);

const app: App = {
  getBundle,
  getBundles,
  loadBundles,
};

export default app;
