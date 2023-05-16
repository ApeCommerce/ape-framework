import BypassMail from './bypass';
import config from '../../config';
import SmtpMail from './smtp';

export enum ModuleId {
  bypass = 'bypass',
  smtp = 'smtp',
}

const id = Object.values(ModuleId).find((moduleId) => moduleId === config.mailModule);
if (!id) { throw new Error(`Mail: invalid module "${config.mailModule}"`); }

export const moduleId = id;

const classes: { [moduleId in ModuleId]: typeof BypassMail | typeof SmtpMail } = {
  bypass: BypassMail,
  smtp: SmtpMail,
};

export const MailModuleClass = classes[moduleId];

export default {
  moduleId,
};
