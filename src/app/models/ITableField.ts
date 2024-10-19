import { IDataItem } from "./IDataItem";

export interface TableField {
  selectable: boolean;
  label: string;
  sortable: boolean;
  hidden?: boolean;
  translatedValue?: boolean;
  translatedHeader?: boolean;
  isElementDisabled?: Function;
  withDraftIcon?: Function;
  withColor?: Function;
  isDateValue?: boolean;
  isTimeValue?: boolean;
  radio?: boolean;
  button?: boolean;
  isOccurrence?: boolean;
  size?: "small" | "big" | "medium";
  dataItem?: IDataItem;
  alignEnd?: boolean;
  filterable?: boolean;
  filterType?: string;
  options?: Array<any>;
  urlKey?: string;
  translatedFilter?: boolean;
}
