import { Translation } from 'i18n/translation';

const translations: Translation[] = [
  {
    languageId: 'en',
    dictionary: {
      greeting: 'Hi {{name}}!',
      oops: 'Oops!',
    },
  },
  {
    languageId: 'fr',
    dictionary: {
      greeting: 'Salut {{name}} !',
    },
  },
];

export default translations;
