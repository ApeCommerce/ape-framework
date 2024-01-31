import type { Parser } from '../parser/Parser'

type Params<T> = {
  [Property in keyof T]: {
    parser: Parser<T[Property]>,
    default: any,
  }
}

export {
  type Params,
}
