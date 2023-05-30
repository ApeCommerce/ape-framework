import { Boot } from 'boot';

const boot: Boot = {
  bundleModules: [
    'test/fixture/bundle/foo',
    'test/fixture/bundle/bar',
  ],
};

export default boot;
