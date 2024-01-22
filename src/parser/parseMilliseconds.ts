import parseDuration from 'parse-duration'
import { parseString } from '.'

const parseMilliseconds = (value: any): number => {
  return Math.trunc(parseDuration(parseString(value)) ?? 0)
}

export {
  parseMilliseconds,
}
