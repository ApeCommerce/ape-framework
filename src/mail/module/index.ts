import Mailgen, { ContentBody } from 'mailgen';
import { Email } from '../email';
import { Mail } from '../mail';
import config from '../config';
import log from '../../log';

export default abstract class MailModule {
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
      nameFrom: email.nameFrom,
      replyTo: email.replyTo,
      subject: email.subject,
      html: mailgen.generate({ body }),
      text: mailgen.generatePlaintext({ body }),
    });

    log.debug(`Mail: sent mail to ${to.join(', ')}`);
  }

  protected abstract sendMail(mail: Mail): Promise<void>;

  abstract close(): Promise<void>;
}
