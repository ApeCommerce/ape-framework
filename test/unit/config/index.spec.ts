import { loadConfig } from 'config'
import { parseBoolean } from 'parser/parseBoolean'
import { parseNumber } from 'parser/parseNumber'
import { parseString } from 'parser/parseString'
import type { Config } from 'config/Config'

interface MyConfig extends Config {
  one: boolean,
  two: number,
  three: string,
}

describe('doing some testing', () => {
  test('is cool', async () => {
    const config = loadConfig<MyConfig>({
      one: {
        parser: parseBoolean,
        default: true,
      },
      two: {
        parser: parseNumber,
        default: 1,
      },
      three: {
        parser: parseString,
        default: 'foo',
      },
    })
    expect(config).toBeDefined()
  })
})
