export interface FileDownloaderFromDataURL {
  downloadFromDataURL(params: FileDownloaderFromDataURLParams): void;
}

export const FileDownloaderFromDataURLToken = "FileDownloaderFromDataURL";

export type FileDownloaderFromDataURLParams = {
  url: string;
  name: string;
};
