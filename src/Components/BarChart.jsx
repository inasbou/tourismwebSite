import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Age de touriste", "Nb  de touristes"],
  ["10-20", 80],
  ["20-30", 30],
  ["30-40", 20],
  ["40-50", 25],
  ["50-60", 16],
];

export const options = {
  title: "Age of tourist",
  chartArea: { width: "50%" },
  colors: ["#6FB1B4"],
  hAxis: {
    title: "Nb  de touristes",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

const BarChart = () => {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  )
} ; 
export default BarChart ;