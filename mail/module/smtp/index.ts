import nodemailer, { Transporter } from 'nodemailer';
import { Mail } from '../../mail';
import config from './config';
import MailModule from '..';

export default class SmtpMail extends MailModule {
  private transporter: Transporter;

  constructor() {
    super();
    this.transporter = nodemailer.createTransport(config.transportOptions);
  }

  protected async sendMail(mail: Mail) {
    await super.sendMail(mail);
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
