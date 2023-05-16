import i18next, { i18n as I18n, Resource as Resources } from 'i18next';
import { getBundles } from '../boot';
import config from './config';

const getNamespaces = async () => (await getBundles()).map((bundle) => bundle.bundleId);

const getResources = async () => {
  const resources: Resources = {};
  (await getBundles()).forEach((bundle) => {
    bundle.translations.forEach((translation) => {
      if (!resources[translation.languageId]) { resources[translation.languageId] = {}; }
      resources[translation.languageId][bundle.bundleId] = translation.dictionary;
    });
  });
  return resources;
};

const init = async () => {
  await i18next.init({
    ns: await getNamespaces(),
    resources: await getResources(),
    fallbackLng: config.fallbackLanguageId,
  });
  return i18next;
};

let i18n: I18n;

export default async () => i18n || init();
