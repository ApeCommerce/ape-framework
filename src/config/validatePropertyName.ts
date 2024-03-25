import { ConfigPropertyNameError } from './error/ConfigPropertyNameError'

const propertyNameRegex = /^[a-z][0-9a-z]+(?:[A-Z][0-9a-z]+)*$/u

const validatePropertyName = (name: string): void => {
  if (!propertyNameRegex.exec(name)) {
    throw new ConfigPropertyNameError(name)
  }
}

export {
  validatePropertyName,
}
