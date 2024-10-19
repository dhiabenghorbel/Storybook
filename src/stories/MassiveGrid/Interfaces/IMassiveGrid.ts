export interface IMassiveGrid {
  id?: string;
  index: number;
  inEdit: boolean;
  action?: string;
  population?: string;
  domain?: string;
  dossier?: string;
  datasection?: string;
  data?: Object[];
  selected?: boolean;
  sort?: Object;
}
