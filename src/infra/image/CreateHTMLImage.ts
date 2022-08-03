import { injectable } from "inversify";

import {
  CreateHTMLImageFromBuffer,
  CreateHTMLImageFromBufferToken,
} from "@application/definitions/CreateHTMLImageFromBuffer";
import { DependencyDictionary } from "@main/container/types";

@injectable()
export class CreateHTMLImage implements CreateHTMLImageFromBuffer {
  async createImage(
    buffer: Buffer,
    mimeType: string
  ): Promise<HTMLImageElement> {
    const image = new Image();
    const blob = new Blob([buffer], { type: mimeType });
    const url = URL.createObjectURL(blob);
    image.src = url;
    return new Promise((resolve, reject) => {
      image.onload = () => {
        resolve(image);
        URL.revokeObjectURL(url);
      };
      image.onerror = (ev) => {
        reject(ev);
        URL.revokeObjectURL(url);
      };
    });
  }
}

export const CreateHTMLImageDependency: DependencyDictionary[] = [
  {
    token: CreateHTMLImageFromBufferToken,
    implementation: CreateHTMLImage,
  },
];
