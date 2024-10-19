import React, { useMemo } from "react";
import { IChartElement } from "../../../app/models/IChart.ts";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface PieChartProps {
  data: IChartElement[];
}

interface PieChartLabelSeries {
  label: string;
  value: number;
  color: string;
}

/**
 * The series expects a single array for pie/donut and radialbar charts. The names of the series values are to be provided in labels property.
 * @param props PieChartProps
 * @constructor
 */
const PieChart = (props: PieChartProps) => {
  const info: PieChartLabelSeries[] = useMemo(() => {
    if (!props.data) return [];
    return props.data.reduce((acc: PieChartLabelSeries[], curr: IChartElement ) => {
      const data: PieChartLabelSeries[] = curr.data.map(i => {
        return {
          label: `${curr.title} - ${i.value}`,
          value: i.amount,
          color: i.color
        };
      });
      return [...acc, ...data];
    }, []);
  }, [props.data]);

  const options: ApexOptions = {
    labels: info.map(e => e.label),
    series: info.map(e => e.value),
    chart: {
      width: 380,
      type: "pie"
    },
    colors: info.map(e => e.color),
    legend: {
      show: true,
      position: "bottom"
    }
  };

  return <ReactApexChart type="pie" width="100%" height="150%" series={options.series} options={options} />;
};

PieChart.defaultProps = {
  data: [{ title: "Skill", data: [{ value: "50%", amount: 1, color: "#BC1111" }] },
  { title: "Knowledge", data: [{ value: "50%", amount: 1, color: "#ED9F9F" }] }]
};

export default PieChart;
