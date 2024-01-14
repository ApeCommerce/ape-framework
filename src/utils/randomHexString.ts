import { randomBytes } from 'crypto'

const randomHexString = (length: number): string => {
  return randomBytes(length / 2 + 1).toString('hex').substring(0, length)
}

export {
  randomHexString,
}
