import env from 'env';

if (!env.mailSmtpHost) { throw new Error('Mail: smtp host not provided'); }
if (!env.mailSmtpEmail) { throw new Error('Mail: smtp email not provided'); }

const transportOptions = {
  host: env.mailSmtpHost,
  port: env.mailSmtpPort || 587,
  auth: env.mailSmtpUser || env.mailSmtpPassword
    ? { user: env.mailSmtpUser || undefined, pass: env.mailSmtpPassword || undefined }
    : undefined,
  pool: true,
};

export default {
  transportOptions,
  email: env.mailSmtpEmail,
};
