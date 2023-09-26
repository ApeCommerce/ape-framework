import { Address } from './mail';

export interface Email {
  nameFrom: string,
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
