export interface Utils {
  parseBoolean: (a: any) => boolean,
  parseNumber: (a: any) => number,
  parseString: (a: any) => string,
  basePath: (p?: string, s?: string) => string,
  parseBytes: (a: any) => number,
  parseMilliseconds: (a: any) => number,
  parseSeconds: (a: any) => number,
  timestamp: () => number,
  uuid: () => string,
  wait: (ms: number) => Promise<void>,
}
