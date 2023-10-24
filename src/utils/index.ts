import bytes from 'bytes';
import crypto from 'crypto';
import parseDuration from 'parse-duration';
import type { Utils } from './utils';

export { Utils };

export const parseBoolean = (a: any) => a === true || a === 1 || a === '1';
export const parseNumber = (a: any) => (a === true ? 0 : Number(a) || 0);
export const parseString = (a: any) => {
  if (['boolean', 'function', 'object'].includes(typeof a)) return '';
  return a === 0 ? '0' : String(a || '');
};

export const basePath = (p?: string, s = '/') => parseString(p).split(s).filter((x) => x)[0] || '';
export const parseBytes = (a: any) => bytes(parseString(a)) || 0;
export const parseMilliseconds = (a: any) => Math.floor(parseDuration(parseString(a)) || 0);
export const parseSeconds = (a: any) => Math.floor(parseNumber(a) || parseMilliseconds(a) / 1000);
export const timestamp = () => Math.floor(Date.now() / 1000);
export const uuid = () => crypto.randomUUID();
export const wait = (ms: number) => new Promise<void>((res) => { setTimeout(() => res(), ms); });

const utils: Utils = {
  basePath,
  parseBoolean,
  parseBytes,
  parseMilliseconds,
  parseNumber,
  parseSeconds,
  parseString,
  timestamp,
  uuid,
  wait,
};

export default utils;
