import { Boot } from 'boot';

const boot: Boot = {
  bundles: async () => [
    (await import('test/fixture/bundle/foo')).default,
    (await import('test/fixture/bundle/bar')).default,
    (await import('test/fixture/bundle/empty')).default,
  ],
};

export default boot;
