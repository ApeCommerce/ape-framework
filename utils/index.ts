import bytes from 'bytes';
import crypto from 'crypto';
import fs from 'fs';
import parseDuration from 'parse-duration';

export const basePath = (p?: string, s = '/') => (p || '').split(s).filter((x: string) => x.length)[0];
export const loadModule = async <T>(path: string) => (await import(path)).default as T;
export const parseBoolean = (a: any) => a === true || a === '1';
export const parseBytes = (a: any) => (a ? bytes(String(a)) : 0);
export const parseJsonFile = (path: string) => JSON.parse(fs.readFileSync(path).toString());
export const parseMilliseconds = (a: any) => (a ? parseDuration(String(a)) : 0);
export const parseNumber = (a: any) => Number(a) || 0;
export const parseSeconds = (a: any) => (a ? Math.floor(parseDuration(String(a)) / 1000) : 0);
export const parseString = (a: any) => String(a || '');
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
