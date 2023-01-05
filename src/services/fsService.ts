import { IResponse } from '@/IType';
import { access, constants, readFile } from 'node:fs/promises';

export async function readFileByPath(
  filePath: string,
): Promise<IResponse<string>> {
  await access(filePath, constants.R_OK);
  const fileContent = await readFile(filePath, { encoding: 'utf-8' });
  return {
    data: fileContent,
  };
}
