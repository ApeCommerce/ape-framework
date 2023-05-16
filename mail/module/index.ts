import Mailgen, { ContentBody } from 'mailgen';
import { timestamp } from '../../utils';
import config from '../config';
import log from '../../log';

export interface Email {
  fromName: string,
  replyTo: Address,
  subject: string,
  header: string,
  headerLink: string,
  title: string,
  intro: string[],
  action?: {
    instructions: string,
    description: string,
    text: string,
    link: string,
  },
  outro?: string[],
  copyright?: string,
  color?: string,
  textDirection?: 'ltr' | 'rtl',
}

export interface Mail {
  to: string[],
  fromName: string,
  replyTo: Address,
  subject: string,
  html: string,
  text: string,
  sendTs: number,
}

export interface Address {
  name: string,
  email: string,
}

export abstract class MailModule {
  protected lastMail?: Mail;

  protected async sendMail(mail: Mail) {
    this.lastMail = mail;
  }

  async send(to: string[], email: Email) {
    const mailgen = new Mailgen({
      theme: config.theme,
      product: {
        name: email.header,
        link: email.headerLink,
        copyright: email.copyright,
      },
      textDirection: email.textDirection,
    });

    const body: ContentBody = {
      title: email.title,
      intro: email.intro,
      outro: email.outro,
      action: email.action ? {
        instructions: email.action.instructions,
        button: {
          text: email.action.text,
          link: email.action.link,
          color: email.color,
        },
      } : undefined,
      goToAction: email.action ? {
        description: email.action.description,
        text: email.action.text,
        link: email.action.link,
      } : undefined,
      greeting: false,
      signature: false,
    };

    await this.sendMail({
      to,
      fromName: email.fromName,
      replyTo: email.replyTo,
      subject: email.subject,
      html: mailgen.generate({ body }),
      text: mailgen.generatePlaintext({ body }),
      sendTs: timestamp(),
    });

    log.debug(`Mail: sent mail to ${to.join(', ')}`);
  }

  getLastMail() {
    return this.lastMail;
  }

  abstract close(): Promise<void>;
}
