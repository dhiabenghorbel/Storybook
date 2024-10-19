import { IDataFromDirectory } from "./IDataFromDirectory";

export interface IGridColumn {
  field: string;
  label?: string;
  title?: string;
  type: string | "default" | "text" | "select" | "action" | "state" | "date";
  width?: number;
  locked?: boolean;
  filterable?: boolean;
  editable?: boolean;
  editor?: string;
  superHead?: boolean;
  superHeadTitle?: string;
  datafromdirectory?: IDataFromDirectory;
  items?: Array<string>;
  id?: string;
  button?: boolean;
  buttonLabel?: string;
  textColor?: string;
  validator?: string;
  func?: Function;
  color?: string;
}
