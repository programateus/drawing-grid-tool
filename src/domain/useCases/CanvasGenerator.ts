import { Canvas } from "canvas";

import { Dimensions } from "@domain/entities/ImageData";

export interface CanvasGenerator {
  create(dimensions: Dimensions): Promise<Canvas>;
}

export const CanvasGeneratorToken = "CanvasGenerator";
