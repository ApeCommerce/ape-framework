import { Boot } from 'boot';

const boot: Boot = {
  bundleModules: [
    'test/fixture/bundle/foo',
    'test/fixture/bundle/bar',
    'test/fixture/bundle/empty',
  ],
};

export default boot;
