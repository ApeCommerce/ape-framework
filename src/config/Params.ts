import type { Parser } from '../parser/Parser'

type Params<Type> = {
  [Property in keyof Type]: {
    parser: Parser<Type[Property]>,
    default: any,
  }
}

export {
  type Params,
}
