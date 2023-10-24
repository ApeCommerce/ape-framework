import type { Bundle } from './bundle';

export interface App {
  getBundle: (bundleId: string) => Promise<Bundle | undefined>,
  getBundles: () => Promise<Bundle[]>,
  initBundles: () => Promise<Bundle[]>,
}
