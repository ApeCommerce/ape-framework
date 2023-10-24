export interface Utils {
  basePath: (p?: string, s?: string) => string,
  parseBoolean: (a: any) => boolean,
  parseBytes: (a: any) => number,
  parseMilliseconds: (a: any) => number,
  parseNumber: (a: any) => number,
  parseSeconds: (a: any) => number,
  parseString: (a: any) => string,
  timestamp: () => number,
  uuid: () => string,
  wait: (ms: number) => Promise<void>,
}
