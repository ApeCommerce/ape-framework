import bytes from 'bytes';
import crypto from 'crypto';
import fs from 'fs';
import parseDuration from 'parse-duration';

export const parseBoolean = (a: any) => a === true || a === 1 || a === '1';
export const parseNumber = (a: any) => (a === true ? 0 : Number(a) || 0);
export const parseString = (a: any) => {
  if (['boolean', 'function', 'object'].includes(typeof a)) return '';
  if (a === 0) return '0';
  return String(a || '');
};

export const parseBytes = (a: any) => bytes(parseString(a)) || 0;
export const parseMilliseconds = (a: any) => Math.floor(parseDuration(parseString(a)) || 0);
export const parseSeconds = (a: any) => {
  const num = parseNumber(a);
  return Math.floor(num || parseMilliseconds(a) / 1000);
};

export const basePath = (p?: string, s = '/') => parseString(p).split(s).filter((x) => x.length)[0] || '';
export const loadModule = async <T>(path: string) => (await import(path)).default as T;
export const parseJsonFile = <T>(path: string) => JSON.parse(fs.readFileSync(path).toString()) as T;
export const timestamp = () => Math.floor(Date.now() / 1000);
export const uuid = crypto.randomUUID;
export const wait = (ms: number) => new Promise((res) => { setTimeout(() => res(true), ms); });

export default {
  basePath,
  loadModule,
  parseBoolean,
  parseBytes,
  parseJsonFile,
  parseMilliseconds,
  parseNumber,
  parseSeconds,
  parseString,
  timestamp,
  uuid,
  wait,
};
