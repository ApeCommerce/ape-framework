export interface Api {
  start: () => Promise<void>,
  close: () => Promise<void>,
  getUrl: () => string,
  doc: () => unknown,
}

export default Api;
