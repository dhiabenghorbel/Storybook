import { Key } from "react";

export interface SelectOptions {
  population: string | undefined;
  domain: string | undefined;
  datasection: string | undefined;
  name: string | undefined;
  label: string | undefined;
  reference?: string | string[];
  source: string | undefined;
  nuStep: string | undefined;
  idTask: string | undefined;
  labelKey: string | undefined;
  defaultValue?: string | number;
  correspondence?: string;
  sourceDataItem?: string;
  delay?: number;
  filterBySubordinate?: boolean;
  labels?: object;
  itemGpid?: string;
  itemDossier?: string;
}

export interface OptionProps {
  value: string;
  label: string;
  key?: Key;
  avoidTranslation?: boolean;
  hideOption?: boolean;
}
