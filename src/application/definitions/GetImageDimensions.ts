import { Dimensions } from "@domain/entities/ImageData";

export interface GetImageDimensions {
  getDimensions(image: Buffer): Promise<Dimensions>;
}

export const GetImageDimensionsToken = "GetImageDimensions";
