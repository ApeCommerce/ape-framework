import { randomBytes } from 'crypto'
import bytes from 'bytes'
import parseDuration from 'parse-duration'

export const parseBoolean = (value: any) => {
  return [true, 1, '1'].includes(value)
}

export const parseNumber = (value: any) => {
  return value === true ? 0 : Number(value) || 0
}

export const parseString = (value: any) => {
  return ['boolean', 'function', 'object'].includes(typeof value)
    ? ''
    : value === 0 ? '0' : String(value || '')
}

export const parseBytes = (value: any) => {
  return bytes(parseString(value)) || 0
}

export const parseMilliseconds = (value: any) => {
  return Math.trunc(parseDuration(parseString(value)) ?? 0)
}

export const parseSeconds = (value: any) => {
  return Math.trunc(parseNumber(value) || parseMilliseconds(value) / 1000)
}

export const randomHexString = (length: number) => {
  return randomBytes(length / 2 + 1).toString('hex').substring(0, length)
}

export const timestamp = () => {
  return Math.trunc(Date.now() / 1000)
}

export const wait = (milliseconds: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, milliseconds))
}

export default {
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
