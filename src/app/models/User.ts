export interface UserInterface {
  category: string;
  delegable: string;
  delegated: string;
  dossier: string;
  label: string;
  localization: string;
  model: string;
  name: string;
  parameter: string;
}

export class User implements UserInterface {
  category: string = "";
  delegable: string = "";
  delegated: string = "";
  dossier: string = "";
  label: string = "";
  localization: string = "";
  model: string = "";
  name: string = "";
  parameter: string = "";
  hasData: boolean = false;

  constructor(role: any) {
    try {
      this.category = role.category || role["@category"];
      this.delegable = role.delegable || role["@delegable"];
      this.delegated = role.delegated || role["@delegated"];
      this.dossier = role.dossier || role["@dossierID"];
      this.label = role.label || role["@label"];
      this.localization = role.localization || role["@localization"];
      this.model = role.model || role["@model"];
      this.name = role.name || role["@name"];
      this.parameter = role.parameter || role["@parameter"];
      this.hasData = true;
    } catch (e) {
      this.hasData = false;
    }
  }

  toJSON(): UserInterface {
    return {
      category: this.category,
      delegable: this.delegable,
      delegated: this.delegated,
      dossier: this.dossier,
      label: this.label,
      localization: this.localization,
      model: this.model,
      name: this.name,
      parameter: this.parameter
    };
  }
}
