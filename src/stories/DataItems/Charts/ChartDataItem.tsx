import React, { FunctionComponent, ReactElement } from "react";
import PieChart from "./PieChart.tsx";
import { IChartDataItem , IChartElement } from "../../../app/models/IChart.ts";
import LoadingSpinner from "../../Loading/LoadingSpinner.tsx";

interface ChartDataItemProps {
  loading : boolean;
  dataItem : IChartElement[] | any;
}

const ChartDataItem: FunctionComponent<IChartDataItem & ChartDataItemProps> = (props): ReactElement => {

  if (props.loading) return <LoadingSpinner />;

  switch (props.type) {
    case "pieChart":
      return <PieChart data={props.dataItem} />;
    case "lineChart":
      return <React.Fragment />;
    case "barChart":
      return <React.Fragment />;
    case "areaChart":
      return <React.Fragment />;
    case "columnChart":
      return <React.Fragment />;
    case "radarChart":
      return <React.Fragment />;
    case "heatChart":
      return <React.Fragment />;
    case "chart":
      return <React.Fragment />;
    default:
      return <React.Fragment />;
  }
};

ChartDataItem.defaultProps = {
  loading: false,
  dataItem : [{ title: "Proteins", data: [{ value: "33,3%", amount: 5, color: "#30A3D5" }] },
  { title: "Fats", data: [{ value: "33,3%", amount: 5, color: "#3044D5" }] },
  { title: "Carbohydrates", data: [{ value: "33,3%", amount: 5, color: "#9FA8ED" }] }]
}

export default ChartDataItem;
