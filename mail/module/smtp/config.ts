import SMTPPool from 'nodemailer/lib/smtp-pool';
import config from '../../../config';

if (!config.mailSmtpHost) { throw new Error('Mail: smtp host not provided'); }
if (!config.mailSmtpPort) { throw new Error('Mail: smtp port not provided'); }
if (!config.mailSmtpEmail) { throw new Error('Mail: smtp email not provided'); }

const transportOptions: SMTPPool.Options = {
  host: config.mailSmtpHost,
  port: config.mailSmtpPort,
  auth: config.mailSmtpUser || config.mailSmtpPassword
    ? { user: config.mailSmtpUser || undefined, pass: config.mailSmtpPassword || undefined }
    : undefined,
  pool: true,
};

export default {
  transportOptions,
  email: config.mailSmtpEmail,
};
