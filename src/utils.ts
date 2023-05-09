import crypto from 'crypto';
import fs from 'fs';

export const basePath = (p?: string, s = '/') => (p || '').split(s).filter((x: string) => x.length)[0];
export const loadModule = async <T>(path: string) => (await import(path)).default as T;
export const parseJsonFile = (path: string) => JSON.parse(fs.readFileSync(path).toString());
export const timestamp = () => Math.floor(Date.now() / 1000);
export const uuid = crypto.randomUUID;
export const wait = (ms: number) => new Promise((res) => { setTimeout(() => res(true), ms); });
