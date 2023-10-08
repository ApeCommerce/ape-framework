import { Bundle } from 'boot/bundle';

const bundle: Bundle = {
  bundleId: 'bar',
  name: 'The bar bundle',
  commands: async () => [],
  migrations: async () => (await import('./migration')).default,
  queues: async () => [],
  routes: async () => [],
  translations: async () => (await import('./translation')).default,
};

export default bundle;
