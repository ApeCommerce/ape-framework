import nodemailer, { Transporter } from 'nodemailer';
import { Mail } from '../../mail';
import { MailModule } from '..';
import config from './config';

export class SmtpMail extends MailModule {
  private transporter: Transporter;

  constructor() {
    super();
    this.transporter = nodemailer.createTransport(config.transportOptions);
  }

  protected async sendMail(mail: Mail) {
    await this.transporter.sendMail({
      to: mail.to,
      from: {
        name: mail.fromName,
        address: config.email,
      },
      replyTo: {
        name: mail.replyTo.name,
        address: mail.replyTo.email,
      },
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    });
  }

  async close() {
    this.transporter.close();
  }
}

export default SmtpMail;
