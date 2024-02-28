import fs from 'fs-extra'
import { args } from '../args'
import { env } from '../env'
import type { Config } from './Config'
import type { Options } from './Options'
import type { Params } from './Params'

const loadConfig = <Type extends Config>(
  params: Params<Type>,
  options: Options,
): Type => {
  let file: any = {}
  if (options.file && fs.existsSync(options.file)) {
    file = fs.readJsonSync(options.file)
  }

  console.log('file', file)
  console.log('env', env)
  console.log('args', args.optional)

  const config: Config = {}
  for (const property in params) {
    console.log('property', property)

    config[property] = params[property].parser(true)
  }
  return config as Type
}

export {
  loadConfig,
}
