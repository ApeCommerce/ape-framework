import { Bundle } from 'boot/bundle';
import translations from './translation';

const bundle: Bundle = {
  bundleId: 'bar',
  name: 'The bar bundle',
  commands: async () => [],
  migrations: async () => (await import('./migration')).default,
  queues: async () => [],
  routes: async () => [],
  translations,
};

export default bundle;
