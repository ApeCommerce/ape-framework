import { randomBytes } from 'crypto'
import bytes from 'bytes'
import parseDuration from 'parse-duration'

const parseBoolean = (value: any) => {
  return [true, 1, '1'].includes(value)
}

const parseNumber = (value: any) => {
  return value === true ? 0 : Number(value) || 0
}

const parseString = (value: any) => {
  return ['boolean', 'function', 'object'].includes(typeof value)
    ? ''
    : value === 0 ? '0' : String(value || '')
}

const parseBytes = (value: any) => {
  return bytes(parseString(value)) || 0
}

const parseMilliseconds = (value: any) => {
  return Math.trunc(parseDuration(parseString(value)) ?? 0)
}

const parseSeconds = (value: any) => {
  return Math.trunc(parseNumber(value) || parseMilliseconds(value) / 1000)
}

const randomHexString = (length: number) => {
  return randomBytes(length / 2 + 1).toString('hex').substring(0, length)
}

const timestamp = () => {
  return Math.trunc(Date.now() / 1000)
}

const wait = (milliseconds: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, milliseconds))
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
