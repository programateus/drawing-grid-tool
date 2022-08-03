import { injectable } from "inversify";

import {
  FileDownloaderFromDataURL,
  FileDownloaderFromDataURLParams,
  FileDownloaderFromDataURLToken,
} from "@domain/useCases/FileDownloaderFromDataURL";
import { DependencyDictionary } from "@main/container/types";

@injectable()
export class FileDownloader implements FileDownloaderFromDataURL {
  downloadFromDataURL(params: FileDownloaderFromDataURLParams): void {
    const { url, name } = params;
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );
    document.body.removeChild(link);
  }
}

export const FileDownloaderDependency: DependencyDictionary[] = [
  {
    token: FileDownloaderFromDataURLToken,
    implementation: FileDownloader,
  },
];
