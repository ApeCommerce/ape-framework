export interface Pwd {
  hashPassword: (password: string) => Promise<string>,
  verifyPassword: (password: string, hash: string) => Promise<boolean>,
}
