import { DependencyDictionary } from "@main/container/types";

import { FileReaderAdapterDependency } from "./file/FileReaderAdapter";
import { ImageSizeAdapterDependency } from "./file/ImageSizeAdapter";
import { CreateHTMLImageDependency } from "./image/CreateHTMLImage";
import { CanvasAdapterDependency } from "./web/CanvasAdapter";

export const infraDependencies: DependencyDictionary[] = [
  ...FileReaderAdapterDependency,
  ...ImageSizeAdapterDependency,
  ...CanvasAdapterDependency,
  ...CreateHTMLImageDependency,
];
