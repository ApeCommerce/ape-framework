const parseString = (value: any): string => {
  if (['boolean', 'function', 'object'].includes(typeof value)) {
    return ''
  }
  return value === 0 ? '0' : String(value || '')
}

export {
  parseString,
}
