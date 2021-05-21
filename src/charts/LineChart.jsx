import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class LineChart extends Component {
  render() {
    return (
      <ReactEcharts
        option={{
          title: {
            text: "Line Chart",
          },
          xAxis: {
            type: "category",
            data: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [
                820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290,
              ],
              type: "line",
              lineStyle: {
                color: "#25f1f5",
                width: 2,
              },
              itemStyle: {
                borderWidth: 2,
                borderColor: "#a5b0af",
              },
            },
          ],
        }}
      />
    );
  }
}

export default LineChart;
