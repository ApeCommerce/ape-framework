import { parseProperty } from './parseProperty'
import { propertyEnvVariable } from './propertyEnvVariable'
import { readFile } from './readFile'
import { validatePropertyName } from './validatePropertyName'
import type { Config } from './Config'
import type { Options } from './Options'
import type { Properties } from './Properties'
import type { Args } from '../cli/Args'
import type { Env } from '../env/Env'

const getConfig = <Type extends Config>(
  properties: Properties<Type>,
  options?: Options,
): Type => {
  const file = options?.file
    ? readFile(options.file.path, options.file.required)
    : {}
  const env: Env = options?.env ?? {}
  const args: Args = options?.args ?? { positional: [], options: {} }

  const config: Config = {}
  for (const name in properties) {
    validatePropertyName(name)
    config[name] = parseProperty(
      name,
      properties[name].parser,
      properties[name].default,
      file[name],
      env[propertyEnvVariable(name)],
      args.options[name],
    )
  }
  return config as Type
}

export {
  getConfig,
}
