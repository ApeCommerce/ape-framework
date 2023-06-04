import { Bundle } from 'boot/bundle';
import migrations from './migration';
import translations from './translation';

const bundle: Bundle = {
  bundleId: 'foo',
  name: 'The foo bundle',
  routes: [],
  migrations,
  queues: [],
  commands: [],
  translations,
};

export default bundle;
