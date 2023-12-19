import type { Boot } from 'app'

const boot: Boot = {
  bundles: async () => [
    (await import('../bundle/foo')).default,
    (await import('../bundle/bar')).default,
    (await import('../bundle/empty')).default,
  ],
}

export default boot
