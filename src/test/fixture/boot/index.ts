import { Boot } from 'boot';
import { Bundle } from 'boot/bundle';
import { loadModule } from 'utils';

const boot: Boot = {
  bundles: () => Promise.all([
    loadModule<Bundle>('test/fixture/bundle/foo'),
    loadModule<Bundle>('test/fixture/bundle/bar'),
    loadModule<Bundle>('test/fixture/bundle/empty'),
  ]),
};

export default boot;
