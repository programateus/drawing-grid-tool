import type { NextPage } from "next";

import container from "@main/container";
import createHomeScreen from "@main/factories/screens/createHomeScreen";
import {
  ImageDataGenerator,
  ImageDataGeneratorToken,
} from "@domain/useCases/ImageDataGenerator";
import {
  CanvasGenerator,
  CanvasGeneratorToken,
} from "@domain/useCases/CanvasGenerator";
import {
  CanvasImageDrawer,
  CanvasImageDrawerToken,
} from "@domain/useCases/CanvasImageDrawer";
import {
  CanvasGridDrawer,
  CanvasGridDrawerToken,
} from "@domain/useCases/CanvasGridDrawer";
import {
  FileDownloaderFromDataURL,
  FileDownloaderFromDataURLToken,
} from "@domain/useCases/FileDownloaderFromDataURL";

const imageDataGenerator = container.get<ImageDataGenerator>(
  ImageDataGeneratorToken
);
const canvasGenerator = container.get<CanvasGenerator>(CanvasGeneratorToken);
const canvasGridDrawer = container.get<CanvasGridDrawer>(CanvasGridDrawerToken);
const canvasImageDrawer = container.get<CanvasImageDrawer>(
  CanvasImageDrawerToken
);
const fileDownloaderFromDataURL = container.get<FileDownloaderFromDataURL>(
  FileDownloaderFromDataURLToken
);

const HomePage: NextPage = () => {
  return createHomeScreen({
    imageDataGenerator,
    canvasGenerator,
    canvasGridDrawer,
    canvasImageDrawer,
    fileDownloaderFromDataURL,
  });
};

export default HomePage;
