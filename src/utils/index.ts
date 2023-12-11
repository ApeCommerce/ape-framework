import { randomBytes, randomUUID } from 'crypto'
import bytes from 'bytes'
import parseDuration from 'parse-duration'

export const parseBoolean = (value: any) => {
  return value === true || value === 1 || value === '1'
}
export const parseNumber = (value: any) => {
  return value === true ? 0 : Number(value) || 0
}
export const parseString = (value: any) => {
  return ['boolean', 'function', 'object'].includes(typeof value)
    ? ''
    : value === 0 ? '0' : String(value || '')
}

export const basePath = (path?: string, separator = '/') => {
  return parseString(path).split(separator).filter((value) => value)[0] || ''
}
export const parseBytes = (value: any) => {
  return bytes(parseString(value)) || 0
}
export const parseMilliseconds = (value: any) => {
  return Math.floor(parseDuration(parseString(value)) ?? 0)
}
export const parseSeconds = (value: any) => {
  return Math.floor(parseNumber(value) || parseMilliseconds(value) / 1000)
}
export const randomString = (length: number) => {
  return randomBytes(length / 2 + 1).toString('hex').substring(0, length)
}
export const timestamp = () => {
  return Math.floor(Date.now() / 1000)
}
export const uuid = () => {
  return randomUUID()
}
export const wait = (milliseconds: number) => {
  return new Promise<void>((resolve) => setTimeout(() => {
    resolve()
  }, milliseconds))
}

export default {
  basePath,
  parseBoolean,
  parseBytes,
  parseMilliseconds,
  parseNumber,
  parseSeconds,
  parseString,
  randomString,
  timestamp,
  uuid,
  wait,
}
