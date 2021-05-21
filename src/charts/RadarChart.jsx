import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class RadarChart extends Component {
  render() {
    return (
      <ReactEcharts
        option={{
          title: {
            text: "Radar",
          },
          legend: {
            data: ["Allocated Budget", "Actual Spending"],
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: "Sales", max: 6500 },
              { name: "Administration", max: 16000 },
              { name: "Information Technology", max: 30000 },
              { name: "Customer Support", max: 38000 },
              { name: "Development", max: 52000 },
              { name: "Marketing", max: 25000 },
            ],
          },
          series: [
            {
              name: "预算 vs 开销（Budget vs spending）",
              type: "radar",
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000],
                  name: "预算分配（Allocated Budget）",
                },
                {
                  value: [5000, 14000, 28000, 26000, 42000, 21000],
                  name: "实际开销（Actual Spending）",
                },
              ],
            },
          ],
        }}
      />
    );
  }
}

export default RadarChart;
