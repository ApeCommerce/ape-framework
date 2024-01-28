import type { Internationalization } from './internationalization'

export interface I18n {
  getI18n: () => Promise<Internationalization>,
  initI18n: () => Promise<Internationalization>,
}
