import { BypassMail } from './bypass'
import { getConfig } from '../../config'
import { SmtpMail } from './smtp'

const config = getConfig()

enum Module {
  bypass = 'bypass',
  smtp = 'smtp',
}

const module = Object.values(Module)
  .find((module: string) => module === config.mailModule)
if (!module) throw new Error(`mail: invalid module "${config.mailModule}"`)

const classes: { [module in Module]: typeof BypassMail | typeof SmtpMail } = {
  bypass: BypassMail,
  smtp: SmtpMail,
}

export const MailModuleClass = classes[module]

export default {
  module,
}
