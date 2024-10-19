import { Errors } from "../IError.ts";

export interface TopicValue {
  label: string;
  name: string;
}

export interface Value {
  value: string;
}

export interface FunctionalActionImpl {
  "@name": string;
  "@label": string;
  localisation: Value | Value[];
  technologyName: string;
  portalAccessUrl?: string;
  topic?: TopicValue;
  roleTemplate?: Value;
}

export interface FunctionalAction {
  "@name": string;
  "@activity": string;
  "@technologyName": string;
  "@portalAccessUrl": string;
  functionalActionImplementation: FunctionalActionImpl | FunctionalActionImpl[];
  topic?: TopicValue;
  roleTemplate: Value;
}

export interface GpMenuItem {
  "@label": string;
  "@name": string;
  functionalAction: FunctionalAction | FunctionalAction[];
}

export interface GpMenuResponse {
  status: string;
  errors?: Errors;
  topic: GpMenuItem | GpMenuItem[];
}

export interface GpListValue {
  name: string;
  apiLabel: string;
  implemented: boolean;
  topic?: TopicValue;
  technologyName?: string;
  portalAccessUrl?: string;
  roleTemplate?: Value;
  label?: string;
}

export interface GpTopic {
  name: string;
  label: string;
  gps: GpListValue[];
}
