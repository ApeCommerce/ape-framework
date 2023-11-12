import { randomBytes, randomUUID } from 'crypto';
import bytes from 'bytes';
import parseDuration from 'parse-duration';
import type { Utils } from './utils';

export { Utils };

export const parseBoolean = (v: any) => v === true || v === 1 || v === '1';
export const parseNumber = (v: any) => (v === true ? 0 : Number(v) || 0);
export const parseString = (v: any) => {
  if (['boolean', 'function', 'object'].includes(typeof v)) return '';
  return v === 0 ? '0' : String(v || '');
};

export const basePath = (p?: string, s = '/') => parseString(p).split(s).filter((v) => v)[0] || '';
export const parseBytes = (v: any) => bytes(parseString(v)) || 0;
export const parseMilliseconds = (v: any) => Math.floor(parseDuration(parseString(v)) || 0);
export const parseSeconds = (v: any) => Math.floor(parseNumber(v) || parseMilliseconds(v) / 1000);
export const randomString = (l: number) => randomBytes(l / 2 + 1).toString('hex').substring(0, l);
export const timestamp = () => Math.floor(Date.now() / 1000);
export const uuid = () => randomUUID();
export const wait = (ms: number) => new Promise<void>((res) => { setTimeout(() => res(), ms); });

const utils: Utils = {
  basePath,
  parseBoolean,
  parseBytes,
  parseMilliseconds,
  parseNumber,
  parseSeconds,
  parseString,
  randomString,
  timestamp,
  uuid,
  wait,
};

export default utils;
