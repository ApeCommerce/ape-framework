import type { Bundle } from './bundle';

export interface Boot {
  bundles: () => Promise<Bundle[]>,
}
