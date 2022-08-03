import { injectable } from "inversify";
import sizeOf from "image-size";

import {
  GetImageDimensions,
  GetImageDimensionsToken,
} from "@application/definitions/GetImageDimensions";
import { Dimensions } from "@domain/entities/ImageData";
import { DependencyDictionary } from "@main/container/types";

@injectable()
export class ImageSizeAdapter implements GetImageDimensions {
  async getDimensions(image: Buffer): Promise<Dimensions> {
    const dimensions = sizeOf(image);
    return {
      width: dimensions.width || 0,
      height: dimensions.height || 0,
    };
  }
}

export const ImageSizeAdapterDependency: DependencyDictionary[] = [
  {
    token: GetImageDimensionsToken,
    implementation: ImageSizeAdapter,
  },
];
