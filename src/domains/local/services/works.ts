import fs from 'fs';
import path from 'path';

import { Work } from 'domains/local/models/works';

const worksDir = path.join(process.cwd(), 'public/assets/works');

export const getAllWorks = (limit?: number): Work[] => {
  const dirs = fs.readdirSync(worksDir);

  const works = dirs.map((d) => {
    const targetDir = path.join(worksDir, d);
    const json = JSON.parse(
      fs.readFileSync(`${targetDir}/index.json`, 'utf-8')
    ) as Work;
    const imgFileNames = fs.readdirSync(`${targetDir}/image`);

    return { ...json, id: d, images: imgFileNames };
  });

  return limit ? works.slice(0, limit) : works;
};

export const getWork = (id: string): Work => {
  const targetDir = path.join(worksDir, id);
  const json = JSON.parse(
    fs.readFileSync(`${targetDir}/index.json`, 'utf-8')
  ) as Work;
  const imgFileNames = fs.readdirSync(`${targetDir}/image`);

  return { ...json, id, images: imgFileNames };
};
