export interface CreateHTMLImageFromBuffer {
  createImage(buffer: Buffer, mimeType: string): Promise<HTMLImageElement>;
}

export const CreateHTMLImageFromBufferToken = "CreateHTMLImageFromBuffer";
