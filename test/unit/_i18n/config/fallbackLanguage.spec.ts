import { initConfig } from 'config'

initConfig({
  i18nFallbackLanguage: '',
})

describe('Loading the config with missing fallback language', () => {
  test('Throws an error', async () => {
    expect(async () => {
      await import('i18n/config')
    }).toThrow()
  })
})
