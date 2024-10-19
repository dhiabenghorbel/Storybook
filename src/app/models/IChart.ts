import { IDataItem } from "./IDataItem";

export interface IChartDataItem {
  population?: string;
  domain?: string;
  dossier?: string;
  values: IDataItem[];
  type?: "pieChart" | "lineChart" | "barChart" | "areaChart" | "columnChart" | "radarChart" | "heatChart" | "chart";
  isModal?: boolean;
}
export interface IChartElementData {
  value: string;
  amount: number;
  color: string;
}

export interface IChartElement {
  data: IChartElementData[];
  amount: number;
  title: string;
}
