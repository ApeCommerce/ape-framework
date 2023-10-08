import { Bundle } from 'boot/bundle';
import translations from './translation';

const bundle: Bundle = {
  bundleId: 'bar',
  name: 'The bar bundle',
  commands: [],
  migrations: async () => (await import('./migration')).default,
  queues: [],
  routes: async () => [],
  translations,
};

export default bundle;
