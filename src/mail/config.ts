import BypassMail from 'mail/module/bypass';
import env from 'env';
import SmtpMail from 'mail/module/smtp';

enum Module {
  bypass = 'bypass',
  smtp = 'smtp',
}

const module = Object.values(Module).find((m) => m === (env.mailModule || Module.bypass));
if (!module) { throw new Error(`Mail: invalid module "${env.mailModule}"`); }

const classes: { [module in Module]: typeof BypassMail | typeof SmtpMail } = {
  bypass: BypassMail,
  smtp: SmtpMail,
};

export const MailModuleClass = classes[module];

export default {
  theme: 'default',
};
