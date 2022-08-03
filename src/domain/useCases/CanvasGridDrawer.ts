import { Canvas } from "canvas";

import { Dimensions } from "@domain/entities/ImageData";

export interface CanvasGridDrawer {
  /**
   * Draw grid on canvas. Every property of the parameter should be in pixels.
   *
   * @param params DrawGridParams
   */
  drawGrid(params: DrawGridParams): void;
}

export const CanvasGridDrawerToken = "CanvasGridDrawer";

export type DrawGridParams = {
  canvas: Canvas;
  imageDimensions: Dimensions;
  paperDimensions: Dimensions;
  gap: number;
};
