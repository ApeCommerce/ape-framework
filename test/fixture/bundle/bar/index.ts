import { Bundle } from 'boot/bundle';
import translations from './translation';

const bundle: Bundle = {
  bundleId: 'bar',
  name: 'The bar bundle',
  routes: [],
  migrations: [],
  queues: [],
  commands: [],
  translations,
};

export default bundle;
