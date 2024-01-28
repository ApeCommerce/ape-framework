import i18next, { init, Resource as Resources } from 'i18next'
import { getBundles } from '../app'
import config from './config'
import type { I18n } from './i18n'
import type { Internationalization } from './internationalization'
import type { Translation } from './translation'

export { I18n, Internationalization, Translation }

const getNamespaces = async () => (await getBundles()).map((bundle) => bundle.bundleId)

const getResources = async () => {
  const resources: Resources = {}
  for (const bundle of await getBundles()) {
    (bundle.translations ? await bundle.translations() : []).forEach((translation) => {
      if (!(translation.languageId in resources)) resources[translation.languageId] = {}
      resources[translation.languageId][bundle.bundleId] = translation.dictionary
    })
  }
  return resources
}

let internalization: Internationalization | undefined

export const initI18n = async () => {
  await init({
    ns: await getNamespaces(),
    resources: await getResources(),
    fallbackLng: config.fallbackLanguage,
  })
  internalization = i18next
  return internalization
}

export const getI18n = async () => internalization ?? initI18n()

const i18n: I18n = {
  getI18n,
  initI18n,
}

export default i18n
