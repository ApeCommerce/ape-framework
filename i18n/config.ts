import config from '../config';

if (!config.i18nFallbackLanguage) throw new Error('I18n: fallback language not provided');

export default {
  fallbackLanguageId: config.i18nFallbackLanguage,
};
