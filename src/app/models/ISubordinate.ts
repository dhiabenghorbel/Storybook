import { TableField } from "./ITableField";

export interface Subordinate {
  "@matcle"?: string;
  "@nmpres"?: string;
  "@nudoss": string;
  "@soccle"?: string;
  data?: object;
  "@label"?: string;
}

export const tableFields: TableField[] = [
  { selectable: true, label: "select", sortable: false, translatedHeader: true, translatedValue: true },
  { selectable: false, label: "@nmpres", sortable: true, translatedHeader: true, translatedValue: false },
  { selectable: false, label: "@matcle", sortable: true, translatedHeader: true, translatedValue: false }
];
