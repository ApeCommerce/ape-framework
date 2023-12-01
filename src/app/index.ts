import path from 'path'
import config from './config'
import node from '../config/node'
import type { App } from './app'
import type { Boot } from './boot'
import type { Bundle } from './bundle'

export { App, Boot, Bundle }

let bundles: Bundle[] | undefined

export const initBundles = async () => {
  const boot: Boot = (await import(
    path.join(process.cwd(), node.path, config.boot)
  )).default
  bundles = await boot.bundles()
  return bundles
}

export const getBundles = async () => bundles ?? initBundles()

export const getBundle = async (bundleId: string) =>
  (await getBundles()).find((bundle) => bundle.bundleId === bundleId)

const app: App = {
  getBundle,
  getBundles,
  initBundles,
}

export default app
