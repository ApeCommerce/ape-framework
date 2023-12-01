import Mailgen, { ContentBody } from 'mailgen'
import config from '../config'
import log from '../../log'
import type { Email } from '../email'
import type { Mail } from '../mail'

export abstract class MailModule {
  async send(to: string[], email: Email) {
    const mailgen = new Mailgen({
      theme: config.theme,
      product: {
        name: email.header,
        link: email.headerLink,
        copyright: email.copyright,
      },
      textDirection: email.textDirection,
    })

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
    }

    await this.sendMail({
      to,
      fromName: email.fromName,
      replyTo: email.replyTo,
      subject: email.subject,
      html: mailgen.generate({ body }),
      text: mailgen.generatePlaintext({ body }),
    })

    log.debug(`mail: sent mail to ${to.join(', ')}`)
  }

  protected abstract sendMail(mail: Mail): Promise<void>

  abstract close(): Promise<void>
}

export default MailModule
