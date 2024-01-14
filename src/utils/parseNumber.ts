const parseNumber = (value: any): number => {
  return value === true ? 0 : Number(value) || 0
}

export {
  parseNumber,
}
