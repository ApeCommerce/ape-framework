import type { Args } from './Args'

type Command = (args: Args) => Promise<void>

export {
  type Command,
}
