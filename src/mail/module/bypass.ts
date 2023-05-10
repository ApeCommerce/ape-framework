import { MailModule } from 'mail/module';

export default class BypassMail extends MailModule {
  async close() { }
}
