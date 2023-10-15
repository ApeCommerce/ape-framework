import fs from 'fs-extra';

const loadFile = (path: string) => {
  let json: any = {};
  if (fs.existsSync(path)) json = fs.readJsonSync(path);
  return json;
};

export default loadFile;
