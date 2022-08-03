import { injectable, inject } from "inversify";

import { ImageData } from "@domain/entities/ImageData";
import { DependencyDictionary } from "@main/container/types";
import {
  ImageDataGenerator,
  ImageDataGeneratorToken,
} from "@domain/useCases/ImageDataGenerator";
import * as InputFileReader from "@application/definitions/InputFileReader";
import * as GetImageDimensions from "@application/definitions/GetImageDimensions";

@injectable()
export class WebImageDataGenerator implements ImageDataGenerator {
  constructor(
    @inject(InputFileReader.InputFileReaderToken)
    private readonly inputFileReader: InputFileReader.InputFileReader,
    @inject(GetImageDimensions.GetImageDimensionsToken)
    private readonly getImageDimensions: GetImageDimensions.GetImageDimensions
  ) {}

  async getData(imageFile: File): Promise<ImageData> {
    const buffer = await this.inputFileReader.readFile(imageFile);
    const dimensions = await this.getImageDimensions.getDimensions(buffer);
    const mimeType = imageFile.type;
    return {
      buffer,
      mimeType,
      dimensions,
    };
  }
}

export const WebImageDataGeneratorDependency: DependencyDictionary[] = [
  {
    token: ImageDataGeneratorToken,
    implementation: WebImageDataGenerator,
  },
];
