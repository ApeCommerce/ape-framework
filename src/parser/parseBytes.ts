import bytes from 'bytes'
import { parseString } from '.'

const parseBytes = (value: any): number => {
  return bytes(parseString(value)) || 0
}

export {
  parseBytes,
}
