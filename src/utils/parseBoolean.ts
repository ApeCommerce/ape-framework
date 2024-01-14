const parseBoolean = (value: any): boolean => {
  return [true, 1, '1'].includes(value)
}

export {
  parseBoolean,
}
