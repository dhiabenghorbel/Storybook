export interface Blob {
  filename: string;
  token: string;
}

export interface Item {
  item: string;
  value: string;
  blob?: Blob;
  onError?: boolean;
  modified?: boolean;
  forcePost?: boolean;
}
