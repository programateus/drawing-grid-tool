import { CanvasGridDrawer } from "@domain/useCases/CanvasGridDrawer";
import { CanvasGenerator } from "@domain/useCases/CanvasGenerator";
import { ImageDataGenerator } from "@domain/useCases/ImageDataGenerator";
import { CanvasImageDrawer } from "@domain/useCases/CanvasImageDrawer";
import { FileDownloaderFromDataURL } from "@domain/useCases/FileDownloaderFromDataURL";

export type HomeScreenProps = {
  imageDataGenerator: ImageDataGenerator;
  canvasGenerator: CanvasGenerator;
  canvasGridDrawer: CanvasGridDrawer;
  canvasImageDrawer: CanvasImageDrawer;
  fileDownloaderFromDataURL: FileDownloaderFromDataURL;
};

export type ToolbarForm = {
  paperType: string;
  paperWidth: string;
  paperHeight: string;
  gap: string;
};
