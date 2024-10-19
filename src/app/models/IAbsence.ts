export interface IAbsence {
  isPending?: boolean;
  date?: Date;
  startDate?: Date;
  endDate?: Date;
  reason?: string;
  code?: string;
  priority?: string;
  nulign?: string;
  style1?: string;
  style2?: string;
  isHalfDay?: boolean;
  halfDayType?: string;
}

export interface IAbsenceUserInfo {
  name: string;
  identi: string;
  matcle: string;
  soccle: string;
  picture: string;
  dossier: string;
  absences?: IAbsence[];
}

export interface ILegend {
  bgColor?: string;
  reason?: string;
}

export interface ITeamPlanning {
  totalAbsences?: IAbsence[];
  absencesByUser?: IAbsenceUserInfo[];
}
