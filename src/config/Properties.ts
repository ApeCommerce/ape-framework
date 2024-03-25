import type { Parser } from '../parser/Parser'

type Properties<Type> = {
  [Property in keyof Type]: {
    parser: Parser<Type[Property]>,
    default?: any,
  }
}

export {
  type Properties,
}
