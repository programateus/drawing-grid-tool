import { ImageData } from "@domain/entities/ImageData";

export interface ImageDataGenerator {
  getData(imageFile: File): Promise<ImageData>;
}

export const ImageDataGeneratorToken = "ImageDataGenerator";
