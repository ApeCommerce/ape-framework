import BypassMail from './bypass';
import config from '../../config';
import SmtpMail from './smtp';

export enum ModuleId {
  bypass = 'bypass',
  smtp = 'smtp',
}

const module = Object.values(ModuleId).find((m) => m === config.mailModule);
if (!module) { throw new Error(`Mail: invalid module "${config.mailModule}"`); }

export const moduleId = module;

const classes: { [moduleId in ModuleId]: typeof BypassMail | typeof SmtpMail } = {
  bypass: BypassMail,
  smtp: SmtpMail,
};

export const MailModuleClass = classes[moduleId];

export default {
  moduleId,
};
