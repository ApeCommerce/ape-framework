import { getConfig } from '../config';

const config = getConfig();

if (!config.i18nFallbackLanguage) throw new Error('I18n: fallback language not provided');

export default {
  fallbackLanguage: config.i18nFallbackLanguage,
};
