export interface InputFileReader {
  readFile(file: File): Promise<Buffer>;
}

export const InputFileReaderToken = "InputFileReader";
