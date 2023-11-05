export interface Utils {
  basePath: (path?: string, separator?: string) => string,
  parseBoolean: (value: any) => boolean,
  parseBytes: (value: any) => number,
  parseMilliseconds: (value: any) => number,
  parseNumber: (value: any) => number,
  parseSeconds: (value: any) => number,
  parseString: (value: any) => string,
  randomString: (length: number) => string,
  timestamp: () => number,
  uuid: () => string,
  wait: (ms: number) => Promise<void>,
}
