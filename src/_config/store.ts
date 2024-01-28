export class Store {
  configurations: any[]

  constructor(...configurations: any[]) {
    this.configurations = configurations
  }

  get(property: string) {
    return this.configurations
      .map((config) => config[property])
      .find((value) => value !== undefined)
  }
}

export default Store
