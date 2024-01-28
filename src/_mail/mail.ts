export interface Mail {
  to: string[],
  fromName: string,
  replyTo: Address,
  subject: string,
  html: string,
  text: string,
}

export interface Address {
  name: string,
  email: string,
}
