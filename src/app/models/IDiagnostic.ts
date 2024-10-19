import { Item } from "./Item";

export interface IDiagnosticAppInfo {
  product: string;
  version: string;
  author: string;
}

export interface IDiagnostic extends IDiagnosticAppInfo {
  timestamp: string;
  mode: string;
  action: string;
  data?: Item[];
  result?: string;
}
