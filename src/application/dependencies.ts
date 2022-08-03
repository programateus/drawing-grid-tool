import { DependencyDictionary } from "@main/container/types";

import { WebImageDataGeneratorDependency } from "./useCases/WebImageDataGenerator";
import { WebCanvasGeneratorDependency } from "./useCases/WebCanvasGenerator";
import { CanvasDrawerDependency } from "./useCases/CanvasDrawer";
import { FileDownloaderDependency } from "./useCases/FileDownloader";

export const applicationDependencies: DependencyDictionary[] = [
  ...WebImageDataGeneratorDependency,
  ...WebCanvasGeneratorDependency,
  ...CanvasDrawerDependency,
  ...FileDownloaderDependency,
];
