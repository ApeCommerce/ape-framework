import MailModule from '..';

export default class BypassMail extends MailModule {
  protected async sendMail() { }

  async close() { }
}
