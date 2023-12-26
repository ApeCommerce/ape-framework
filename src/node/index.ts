import { parseString } from '../utils'

export class Node {
  private env: string

  private path: string

  constructor() {
    this.env = parseString(process.env.NODE_ENV)
    this.path = parseString(process.env.NODE_PATH)
  }

  getEnv() {
    return this.env
  }

  getPath() {
    return this.path
  }
}

export default new Node()
