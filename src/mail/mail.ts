export interface Mail {
  to: string[],
  nameFrom: string,
  replyTo: Address,
  subject: string,
  html: string,
  text: string,
}

export interface Address {
  name: string,
  email: string,
}
