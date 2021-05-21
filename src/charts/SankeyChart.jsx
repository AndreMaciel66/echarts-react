import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import energy from "../data/energy.json";

const data = energy;

class SankeyChart extends Component {
  render() {
    return (
      <ReactEcharts
        option={{
          title: {
            text: "Energy Sankey Flow - Source/Target",
          },
          tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
          },
          animation: false,
          series: [
            {
              type: "sankey",
              emphasis: {
                focus: "adjacency",
              },
              nodeAlign: "right",
              data: data.nodes,
              links: data.links,
              lineStyle: {
                color: "source",
                curveness: 0.5,
              },
            },
          ],
        }}
      />
    );
  }
}
export default SankeyChart;
