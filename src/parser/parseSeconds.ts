import { parseMilliseconds, parseNumber } from '.'

const parseSeconds = (value: any): number => {
  return Math.trunc(parseNumber(value) || parseMilliseconds(value) / 1000)
}

export {
  parseSeconds,
}
