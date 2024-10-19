import { Item } from "./Item";

export interface Occurrence {
  "@action"?: string;
  "@population"?: string;
  "@domain"?: string;
  "@dossier"?: string;
  "@datasection"?: string;
  data?: Item | Item[];
  modified?: boolean;
  id?: string;
}

export interface OccurrenceList {
  occurrence: Occurrence[] | Occurrence;
}
