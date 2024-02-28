const propertyNameRegex = /^[a-z]{2,}(?:[A-Z][0-9a-z]+)*$/u

const validatePropertyName = (name: string): boolean => {
  return Boolean(propertyNameRegex.exec(name))
}

export {
  validatePropertyName,
}
