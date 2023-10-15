import { MailModule } from '..';

export class BypassMail extends MailModule {
  protected async sendMail() { }

  async close() { }
}

export default BypassMail;
