import { AUTHOR, NAME, VERSION } from "../../../GP4You/constants";
import TOPICS from "../topics";
import { IDiagnostic, IDiagnosticAppInfo } from "../../models/IDiagnostic.ts";
import { Item } from "../../models/Item.ts";

// Diagnostic TOPICs
export const DIAGNOSTIC_KEY = "diagnotic_mode";
export const SET_DIAGNOSTIC_CONTENT_TOPIC = "SET_DIAGNOSTIC_CONTENT_TOPIC";

// Diagnostic Modes
export const GP_INSPECTION_MODE = "GP_INSPECTION_MODE";
export const NETWORK_MODE = "NETWORK_MODE";
export const APPLICATION_MODE = "APPLICATION_MODE";

export const getDiagnosticMode = (): boolean => JSON.parse(sessionStorage.getItem(DIAGNOSTIC_KEY) || "false");
export const setDiagnosticMode = (value: boolean) => sessionStorage.setItem(DIAGNOSTIC_KEY, `${value}`);

// Memoization
let diagnosticHistory: IDiagnostic[] = [{
  product:"GP4You-RD",
  version:"1.2.3-rc1",
  author:"SOPRA-HR-GP4You-RD-Team",
  mode:"NETWORK_MODE",
  action:"HTTP Request",
  timestamp:"05/05/2023 11:49:38",
  data:[
    {item: "Status", value: "Pending"},
    {item: "Method", value: "GET"}
  ]
},{
  product:"GP4You-RD",
  version:"1.2.3-rc1",
  author:"SOPRA-HR-GP4You-RD-Team",
  mode:"NETWORK_MODE",
  action:"HTTP Request",
  timestamp:"07/05/2023 15:33:21",
  data:[
    {item: "Status", value: "Pending"},
    {item: "Method", value: "GET"}
  ]
}];

const addToHistory = (content: IDiagnostic) => {
  if (diagnosticHistory.length > 50) {
    const newData = diagnosticHistory.slice(Math.max(diagnosticHistory.length - 40));
    newData.push(content);
    diagnosticHistory = newData;
  } else {
    diagnosticHistory = [...diagnosticHistory, content];
  }
};

export const getHistory = (): IDiagnostic[] => {
  return [...diagnosticHistory];
};

const getAppData = (): IDiagnosticAppInfo => {
  return {
    product: NAME,
    version: VERSION,
    author: AUTHOR
  };
};

export const webServiceDiagnosticContentGenerator = (status: string, method: string, url: string, data: any): IDiagnostic => {
  return {
    ...getAppData(),
    mode: NETWORK_MODE,
    action: "HTTP Request",
    timestamp: `${new Date().toLocaleString()}`,
    data: [
      { item: "Status", value: status },
      { item: "Method", value: method },
      { item: "Url", value: url },
      { item: "Payload", value: JSON.stringify(data) }
    ]
  };
};

export const dataItemDiagnosticContentGenerator = (
  gpid: string,
  dossier: string,
  population: string,
  domain: string,
  datasection: string,
  name: string,
  action: string,
  type: string,
  regex: string
): Item[] => [
  { item: "Gpid", value: gpid },
  { item: "Dossier", value: dossier },
  { item: "Population", value: population },
  { item: "Domain", value: domain },
  { item: "DataSection", value: datasection },
  { item: "DataItem", value: name },
  { item: "Action", value: action },
  { item: "Type", value: type },
  { item: "Regex", value: regex }
];

export const logDiagnostic = async (action: string, result: string, mode: string = GP_INSPECTION_MODE, data?: Item[]): Promise<void> => {
  const diagnosticContent: IDiagnostic = {
    ...getAppData(),
    mode,
    action,
    timestamp: `${new Date().toLocaleString()}`,
    result,
    data
  };
  addToHistory(diagnosticContent);
  TOPICS.SET_DIAGNOSTIC_CONTENT_TOPIC.next(getHistory());
};

export const logRequest = async (status: string, method: string, url: string, data: any): Promise<void> => {
  const diagnosticContent = webServiceDiagnosticContentGenerator(status, method, url, data);
  addToHistory(diagnosticContent);
  TOPICS.SET_DIAGNOSTIC_CONTENT_TOPIC.next(getHistory());
};
