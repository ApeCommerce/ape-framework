import { getConfig } from '../../config';
import BypassMail from './bypass';
import SmtpMail from './smtp';

const config = getConfig();

enum ModuleId {
  bypass = 'bypass',
  smtp = 'smtp',
}

const moduleId = Object.values(ModuleId).find((id) => id === config.mailModule);
if (!moduleId) throw new Error(`mail: invalid module "${config.mailModule}"`);

const classes: { [moduleId in ModuleId]: typeof BypassMail | typeof SmtpMail } = {
  bypass: BypassMail,
  smtp: SmtpMail,
};

export const MailModuleClass = classes[moduleId];

export default {
  moduleId,
};
