import { CanvasGridDrawer } from "@domain/useCases/CanvasGridDrawer";
import { CanvasGenerator } from "@domain/useCases/CanvasGenerator";
import { ImageDataGenerator } from "@domain/useCases/ImageDataGenerator";
import { CanvasImageDrawer } from "@domain/useCases/CanvasImageDrawer";
import { FileDownloaderFromDataURL } from "@domain/useCases/FileDownloaderFromDataURL";
import HomeScreen from "@presentation/screens/Home";

type CreateHomeScreenProps = {
  imageDataGenerator: ImageDataGenerator;
  canvasGenerator: CanvasGenerator;
  canvasGridDrawer: CanvasGridDrawer;
  canvasImageDrawer: CanvasImageDrawer;
  fileDownloaderFromDataURL: FileDownloaderFromDataURL;
};

const createHomeScreen = ({
  imageDataGenerator,
  canvasGenerator,
  canvasGridDrawer,
  canvasImageDrawer,
  fileDownloaderFromDataURL,
}: CreateHomeScreenProps) => {
  return (
    <HomeScreen
      imageDataGenerator={imageDataGenerator}
      canvasGenerator={canvasGenerator}
      canvasGridDrawer={canvasGridDrawer}
      canvasImageDrawer={canvasImageDrawer}
      fileDownloaderFromDataURL={fileDownloaderFromDataURL}
    />
  );
};

export default createHomeScreen;
