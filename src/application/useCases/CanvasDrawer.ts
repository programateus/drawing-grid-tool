import { inject, injectable } from "inversify";

import {
  CanvasImageDrawer,
  CanvasImageDrawerParams,
  CanvasImageDrawerToken,
} from "@domain/useCases/CanvasImageDrawer";
import * as CreateHTMLImageFromBuffer from "@application/definitions/CreateHTMLImageFromBuffer";
import {
  CanvasGridDrawer,
  CanvasGridDrawerToken,
  DrawGridParams,
} from "@domain/useCases/CanvasGridDrawer";
import { DependencyDictionary } from "@main/container/types";
import { cmToPx } from "@presentation/utils/conversion";

@injectable()
export class CanvasDrawer implements CanvasImageDrawer, CanvasGridDrawer {
  constructor(
    @inject(CreateHTMLImageFromBuffer.CreateHTMLImageFromBufferToken)
    private readonly createHtmlImageFromBuffer: CreateHTMLImageFromBuffer.CreateHTMLImageFromBuffer
  ) {}

  async drawImage(params: CanvasImageDrawerParams): Promise<void> {
    const {
      canvas,
      clearCanvas,
      imageData: { buffer, mimeType },
    } = params;
    const context = canvas.getContext("2d");
    if (clearCanvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    const image = await this.createHtmlImageFromBuffer.createImage(
      buffer,
      mimeType
    );
    context.drawImage(image, 0, 0);
  }

  drawGrid(params: DrawGridParams): void {
    const {
      canvas,
      imageDimensions,
      paperDimensions,
      gap,
      lineColor,
      lineWidth,
    } = params;
    const imageRes = Math.sqrt(imageDimensions.width * imageDimensions.height);
    const paperRes = Math.sqrt(
      cmToPx(Number(paperDimensions.width)) *
        cmToPx(Number(paperDimensions.height))
    );
    const measure = imageRes / paperRes;
    const finalGap = measure * cmToPx(Number(gap));
    const context = canvas.getContext("2d");
    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;
    let rows = 0;
    let columns = 0;
    while (rows < imageDimensions.height) {
      rows += finalGap;
      context.beginPath();
      context.moveTo(0, rows);
      context.lineTo(imageDimensions.width, rows);
      context.stroke();
    }
    while (columns < imageDimensions.width) {
      columns += finalGap;
      context.beginPath();
      context.moveTo(columns, 0);
      context.lineTo(columns, imageDimensions.height);
      context.stroke();
    }
  }
}

export const CanvasDrawerDependency: DependencyDictionary[] = [
  {
    token: CanvasImageDrawerToken,
    implementation: CanvasDrawer,
  },
  {
    token: CanvasGridDrawerToken,
    implementation: CanvasDrawer,
  },
];
