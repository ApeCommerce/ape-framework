import { Bundle } from './bundle';

export interface Boot {
  bundles: () => Promise<Bundle[]>,
}
