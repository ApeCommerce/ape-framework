import { Bundle } from './bundle';

export interface App {
  getBundle: (bundleId: string) => Promise<Bundle | undefined>,
  getBundles: () => Promise<Bundle[]>,
  loadBundles: () => Promise<Bundle[]>,
}
