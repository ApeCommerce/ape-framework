import { randomBytes } from 'crypto'
import bytes from 'bytes'
import parseDuration from 'parse-duration'

const parseBoolean = (value: any): boolean => {
  return [true, 1, '1'].includes(value)
}

const parseNumber = (value: any): number => {
  return value === true ? 0 : Number(value) || 0
}

const parseString = (value: any): string => {
  if (['boolean', 'function', 'object'].includes(typeof value)) {
    return ''
  }
  return value === 0 ? '0' : String(value || '')
}

const parseBytes = (value: any): number => {
  return bytes(parseString(value)) || 0
}

const parseMilliseconds = (value: any): number => {
  return Math.trunc(parseDuration(parseString(value)) ?? 0)
}

const parseSeconds = (value: any): number => {
  return Math.trunc(parseNumber(value) || parseMilliseconds(value) / 1000)
}

const randomHexString = (length: number): string => {
  return randomBytes(length / 2 + 1).toString('hex').substring(0, length)
}

const timestamp = (): number => {
  return Math.trunc(Date.now() / 1000)
}

const wait = async (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}

export {
  parseBoolean,
  parseBytes,
  parseMilliseconds,
  parseNumber,
  parseSeconds,
  parseString,
  randomHexString,
  timestamp,
  wait,
}
