import { initConfig } from 'config'

initConfig({
  i18nFallbackLanguage: 'en',
})

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = (await import('i18n/config')).default
    expect(config).toStrictEqual({
      fallbackLanguage: 'en',
    })
  })
})
