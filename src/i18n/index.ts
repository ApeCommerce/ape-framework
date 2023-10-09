import i18next, { i18n as I18next, Resource as Resources } from 'i18next';
import { getBundles } from '../app';
import config from './config';

const getNamespaces = async () => (await getBundles()).map((bundle) => bundle.bundleId);

const getResources = async () => {
  const resources: Resources = {};
  for (const bundle of await getBundles()) {
    (bundle.translations ? await bundle.translations() : []).forEach((translation) => {
      if (!resources[translation.languageId]) resources[translation.languageId] = {};
      resources[translation.languageId][bundle.bundleId] = translation.dictionary;
    });
  }
  return resources;
};

let i18n: I18next;

export const initI18n = async () => {
  await i18next.init({
    ns: await getNamespaces(),
    resources: await getResources(),
    fallbackLng: config.fallbackLanguage,
  });
  i18n = i18next;
  return i18n;
};

export const getI18n = async () => i18n || initI18n();

export default {
  initI18n,
  getI18n,
};
