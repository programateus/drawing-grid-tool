export interface ImageData {
  buffer: Buffer;
  dimensions: Dimensions;
  mimeType: string;
}

export type Dimensions = {
  width: number;
  height: number;
};
