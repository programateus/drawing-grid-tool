import { Canvas } from "canvas";

export interface CreateCanvas {
  create(params: CreateCanvasParams): Promise<Canvas>;
}

export const CreateCanvasToken = "CreateCanvas";

export type CreateCanvasParams = {
  width: number;
  height: number;
};
