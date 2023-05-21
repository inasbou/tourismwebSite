import React from "react";
import { Chart } from "react-google-charts";


export const data = [
  ["Task", "Hours per Day"],
  ["France", 11],
  ["Tunisie", 2],
  ["USA", 2],
  ["Italie", 2],
  ["Marroc", 7],
  ["Malaisie", 3],
  ["Suisse", 5],
  ["Libye", 1],
];

export const options = {
  title: "Pays des touristes",
  pieHole: 0.4,
  is3D: false,
  colors: ["#1a3031","#2e5658","#49898c","#498a8d", "#56a2a6","#62aaad","#7cb8bb","#96c6c8","#a1ccce",]
};

const  PieChart = () => {
  return (
    <div>
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    /> 

   </div>
    
    )
};
export default PieChart;
