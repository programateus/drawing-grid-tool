import { injectable } from "inversify";
import { Canvas, createCanvas } from "canvas";

import {
  CreateCanvas,
  CreateCanvasParams,
  CreateCanvasToken,
} from "@application/definitions/CreateCanvas";
import { DependencyDictionary } from "@main/container/types";

@injectable()
export class CanvasAdapter implements CreateCanvas {
  async create(params: CreateCanvasParams): Promise<Canvas> {
    const { width, height } = params;
    return createCanvas(width, height);
  }
}

export const CanvasAdapterDependency: DependencyDictionary[] = [
  {
    token: CreateCanvasToken,
    implementation: CanvasAdapter,
  },
];
