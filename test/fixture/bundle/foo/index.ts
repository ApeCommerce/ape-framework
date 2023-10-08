import { Bundle } from 'boot';

const bundle: Bundle = {
  bundleId: 'foo',
  name: 'The foo bundle',
  commands: async () => [],
  migrations: async () => (await import('./migration')).default,
  queues: async () => [],
  routes: async () => [],
  translations: async () => (await import('./translation')).default,
};

export default bundle;
