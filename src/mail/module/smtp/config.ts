import { Options } from 'nodemailer/lib/smtp-pool';
import { getConfig } from '../../../config';

const config = getConfig();

if (!config.mailSmtpHost) throw new Error('mail: smtp host not provided');
if (!config.mailSmtpPort) throw new Error('mail: smtp port not provided');
if (!config.mailSmtpEmail) throw new Error('mail: smtp email not provided');

const transportOptions: Options = {
  host: config.mailSmtpHost,
  port: config.mailSmtpPort,
  auth: config.mailSmtpUser || config.mailSmtpPassword
    ? { user: config.mailSmtpUser || undefined, pass: config.mailSmtpPassword || undefined }
    : undefined,
  pool: true,
};

export default {
  email: config.mailSmtpEmail,
  transportOptions,
};
