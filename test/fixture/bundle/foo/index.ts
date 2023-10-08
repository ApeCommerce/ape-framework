import { Bundle } from 'boot/bundle';
import translations from './translation';

const bundle: Bundle = {
  bundleId: 'foo',
  name: 'The foo bundle',
  commands: [],
  migrations: async () => (await import('./migration')).default,
  queues: [],
  routes: [],
  translations,
};

export default bundle;
