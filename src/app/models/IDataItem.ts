import { SelectOptions } from "./ISelectOptions";
import { ReactElement } from "react";
import { Occurrence } from "./IOcurrence";
import { Item } from "./Item";

export interface IDataItem {
  population?: string;
  domain?: string;
  dossier?: string;
  datasection?: string;
  action?: "C" | "M" | "D";
  name: string;
  useMultipleModal?: boolean;
  names?: string[];
  uplodable?: boolean;
  type:
    | "text"
    | "number"
    | "boolean"
    | "float"
    | "customFloat"
    | "integer"
    | "email"
    | "textarea"
    | "password"
    | "percent"
    | "rangeDate"
    | "time"
    | "timePicker"
    | "date"
    | "month"
    | "year"
    | "select"
    | "photo"
    | "codes"
    | "file"
    | "radio"
    | "register"
    | "currency"
    | "report"
    | "yearMonth";
  // optional props
  label?: string;
  withoutLabel?: boolean;
  readOnly?: boolean;
  alphanum?: string;
  max?: string | number | undefined;
  maxLength?: number;
  min?: string | number | undefined;
  minLength?: number;
  or?: string[];
  regex?: string;
  required?: boolean;
  params?: any;
  paramValue?: string;
  from?: string;
  disabled?: string;
  aligned?: boolean;
  smallSize?: boolean;
  mediumSize?: boolean;
  marginLeft?: boolean;
  bigMarginRight?: boolean;
  bigSize?: boolean;
  extraSmallSize?: boolean;
  unitSize?: boolean;
  bold?: boolean;
  empty?: boolean;
  withImageStyle?: boolean;
  radix?: number;
  reference?: string | string[];
  useRefValue?: boolean;
  sendLabel?: boolean;
  analog?: boolean;
  allowFor?: string[];
  forbidFor?: string[] | string;
  requiredFor?: string[];
  parameter?: boolean;
  parameterWithSubordinate?: boolean;
  hideIfNoValue?: boolean;
  filterItem?: boolean;
  forcePost?: boolean;
  isModal?: boolean;
  modalTag?: string;
  first?: boolean;
  big?: boolean;
  small?: boolean;
  underEachOther?: boolean;
  halfwidth?: boolean;
  source?:
    | string
    | "datafromdirectory"
    | "datafromlink"
    | "datafromdirectoryTask"
    | "datafromlinkTask"
    | "datafromlinkTaskLabelWithKey"
    | "datafromdirectoryTaskLabelWithKey"
    | "datafromdirectoryUrlLabelWithKey"
    | "datafromlinkLabelWithKey"
    | "datafromlinkTaskWithLabelKey";
  nuStep?: string;
  labelKey?: string;
  idTask?: string;
  itemsection?: string;
  value?: string;
  forcedValue?: string | "";
  defaultValue?: string | number;
  nulign?: string;
  options?: SelectOptions[];
  delay?: number;
  isDossierOccurrence?: boolean;
  hidden?: boolean;
  hiddenInModal?: boolean;
  autoComplete?: boolean;
  noEmptyOption?: boolean;
  correspondence?: string;
  color?: string;
  step?: string | number | undefined;
  downloadable?: boolean;
  notUploadable?: boolean;
  isArchive?: boolean;
  children?: ReactElement | ReactElement[];
  elementDisabled?: (modalChanges: Occurrence[]) => boolean;
  formatedTime?: boolean;
  formatedDate?: boolean;
  numberFormat?: boolean;
  sibling?: Item; // example  { item: "ITEM NAME", value: "FILTER VALUE" }
  onChangeSelect?: Function;
  validationType?: string;
  textAreaHeight?: number;
  filterBySubordinate?: boolean;
  forceParam?: boolean;
  items?: string[];
  button?: boolean;
  defaultRefValue?: string;
  gpVal?: any;
  avoidPost?: boolean;
}

// eslint-disable-next-line no-undef
export const defaultProps: Partial<IDataItem> = {
  hidden: false,
  parameter: false,
  parameterWithSubordinate: false,
  label: undefined,
  withoutLabel: false,
  // onChangeSelect: () => {},
  type: "text",
  names: undefined,
  regex: undefined,
  readOnly: false,
  required: false,
  aligned: false,
  first: false,
  underEachOther: false,
  defaultValue: undefined,
  empty: false,
  withImageStyle: false,
  smallSize: false,
  bold: false,
  step: undefined,
  min: undefined,
  max: undefined,
  hideIfNoValue: false,
  nulign: undefined,
  radix: 0,
  useMultipleModal: false,
  reference: "",
  sendLabel: false,
  analog: false,
  allowFor: undefined,
  forbidFor: undefined,
  requiredFor: undefined,
  useRefValue: false,
  isModal: false,
  filterItem: false,
  big: false,
  small: false,
  or: ["", "X"],
  forcePost: false,
  downloadable: false,
  notUploadable: false,
  isArchive: false,
  elementDisabled: undefined,
  sibling: undefined,
  onChangeSelect: () => {},
  validationType: undefined,
  textAreaHeight: undefined,
  filterBySubordinate: false,
  forceParam: false,
  button: false,
  defaultRefValue: undefined,
  avoidPost: false
};
