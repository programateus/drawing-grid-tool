import { inject, injectable } from "inversify";
import { Canvas } from "canvas";

import {
  CanvasGenerator,
  CanvasGeneratorToken,
} from "@domain/useCases/CanvasGenerator";
import * as CreateCanvas from "@application/definitions/CreateCanvas";
import { DependencyDictionary } from "@main/container/types";
import { Dimensions } from "@domain/entities/ImageData";

@injectable()
export class WebCanvasGenerator implements CanvasGenerator {
  constructor(
    @inject(CreateCanvas.CreateCanvasToken)
    private readonly createCanvas: CreateCanvas.CreateCanvas
  ) {}

  async create(dimensions: Dimensions): Promise<Canvas> {
    const canvas = await this.createCanvas.create(dimensions);
    return canvas;
  }
}

export const WebCanvasGeneratorDependency: DependencyDictionary[] = [
  {
    token: CanvasGeneratorToken,
    implementation: WebCanvasGenerator,
  },
];
