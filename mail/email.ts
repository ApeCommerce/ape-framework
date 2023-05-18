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

export interface Address {
  name: string,
  email: string,
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
