import { loadConfig } from 'config'
import { parseBoolean } from 'parser/parseBoolean'
import { parseNumber } from 'parser/parseNumber'
import { parseString } from 'parser/parseString'
import type { Config } from 'config/Config'

interface Configuration extends Config {
  one: boolean,
  two: number,
  three: string,
}

describe('doing some testing', () => {
  test('is cool', async () => {
    const config = loadConfig<Configuration>(
      {
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
      },
      {
        file: 'foo.json',
        env: true,
        args: true,
      },
    )
    expect(config).toBeDefined()
  })
})
