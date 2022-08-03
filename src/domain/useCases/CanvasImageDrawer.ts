import { Canvas } from "canvas";

import { ImageData } from "@domain/entities/ImageData";

export interface CanvasImageDrawer {
  drawImage(params: CanvasImageDrawerParams): Promise<void>;
}

export const CanvasImageDrawerToken = "CanvasImageDrawer";

export type CanvasImageDrawerParams = {
  canvas: Canvas;
  imageData: ImageData;
  clearCanvas?: boolean;
};
