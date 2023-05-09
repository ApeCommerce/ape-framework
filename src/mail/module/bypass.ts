import { MailModule } from 'framework/mail/module';

export default class BypassMail extends MailModule {
  async close() { }
}
