import React, {  useState } from "react";
import ReactChartkick, { AreaChart, BarChart, ColumnChart, LineChart, PieChart } from "react-chartkick";
import {Chart} from "chart.js";
import Select from "../../Select/Select.tsx";
import Option from "../../Select/Option/Option.tsx";

ReactChartkick.addAdapter(Chart);

interface ChartComponentProps {
  gpid: string;
  x: string;
  y: string;
  z: string;
  datasection: string;
  label?: string;
  colors?: Array<any>;
}

const ChartComponent = ({ label, colors, x, y, z, gpid, datasection }: ChartComponentProps) => {
  const initialState = {
    data:  [["Adaptability" , "4"],["Customer satisf" , "4"],["Team building" , "4"],["Perspective" , "2"],["Administration" , "0"]],
    dataZ: [["Adaptability" , "0"],["Customer satisf" , "0"],["Team building" , "0"],["Perspective" , "0"],["Administration" , "4"]],
    ListChartType: [
      { value: "column", label: "column" },
      { value: "bar", label: "bar" },
      { value: "line", label: "line" },
      { value: "pie", label: "pie" },
      { value: "area", label: "area" }
    ],
    selectedChartType: "  "
  };

  const [state, setState] = useState(initialState);


  
  const onChangeChartType = (val: string) => {
    setState({ ...state, selectedChartType: val });
  };

  const xtitle = x;
  const ytitle = y;
  const ztitle = z;

  const chartData = [
    { name: ytitle, data: state.data },
    { name: ztitle, data: state.dataZ }
  ];

  const chart = (selectedChartType: string) => {
    switch (selectedChartType) {
      case "line":
        return (
          <LineChart
            xtitle={xtitle} ytitle={ytitle}
            data={chartData}
            legend
            library={{ backgroundColor: "#eee" }}
            //messages={{ empty: "No data" }}
            label={label}
            discrete
            colors={colors}
          />
        );
      case "pie":
        return <PieChart data={state.dataZ} legend /*messages={{ empty: "No data" }}*/ label={label} donut colors={colors} />;
      case "bar":
        return <BarChart data={chartData} legend /*messages={{ empty: "No data" }}*/ label={label} colors={colors} />;
      case "area":
        return <AreaChart data={chartData} legend xtitle={xtitle} ytitle={ytitle} /*messages={{ empty: "No data" }}*/ label={label} colors={colors} />;
      default:
        return <ColumnChart data={chartData} legend xtitle={xtitle} ytitle={ytitle} /*messages={{ empty: "No data" }}*/ label={label} colors={colors} />;
    }
  };

  return (
    <div>
      {chart(state.selectedChartType)}
      <Select label="Chart type" name="chart" onChange={(e: any) => onChangeChartType(e)} value={state.selectedChartType} /*smallSize={!isMobileView(screen.width)}*/>
        {state.ListChartType.map(option => (
          <Option value={option.value} label={option.label} key={option.value} />
        ))}
      </Select>
    </div>
  );
};

ChartComponent.defaultProps = {
  type: "column",
  legendPosition: "bottom",
  label: "Valeur",
  colors: null,
  x: "Skill",
  y: "Proficiency",
  z:"Required Level"
};



export default ChartComponent;
