import fs from 'fs-extra';

export const loadFile = (path: string) => {
  let json: any = {};
  if (fs.existsSync(path)) json = fs.readJsonSync(path);
  return json;
};

export const loadProperty = (
  name: string,
  overrideConfig: any,
  fileConfig: any,
  envConfig: any,
  defaultConfig: any,
) => [
  overrideConfig[name],
  fileConfig[name],
  envConfig[name],
  defaultConfig[name],
].find((property) => property !== undefined);

export default {
  loadFile,
  loadProperty,
};
