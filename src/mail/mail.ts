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
