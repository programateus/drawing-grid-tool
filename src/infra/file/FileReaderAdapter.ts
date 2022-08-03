import { injectable } from "inversify";

import {
  InputFileReader,
  InputFileReaderToken,
} from "@application/definitions/InputFileReader";
import { DependencyDictionary } from "@main/container/types";

@injectable()
export class FileReaderAdapter implements InputFileReader {
  async readFile(file: File): Promise<Buffer> {
    const reader = new FileReader();
    const promise = new Promise<Buffer>((resolve, reject) => {
      reader.onload = () => {
        const result = reader.result as ArrayBuffer;
        if (!result) {
          reject(reader.error);
          return;
        }
        const buffer = Buffer.from(result);
        resolve(buffer);
      };
      reader.onerror = () => {
        reject(reader.error);
      };
      reader.readAsArrayBuffer(file);
    });
    return promise;
  }
}

export const FileReaderAdapterDependency: DependencyDictionary[] = [
  {
    token: InputFileReaderToken,
    implementation: FileReaderAdapter,
  },
];
