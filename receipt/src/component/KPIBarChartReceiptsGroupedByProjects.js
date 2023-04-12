import ReactEcharts from "echarts-for-react";


const KPIBarChartReceiptsGroupedByProjects = props => {
  const {groupedData} = props;
  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 60 },
    xAxis: {
      type: "category",
      data: Object.keys(groupedData).sort(),
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        type: "bar",
        smooth: true,
        data: Object.values(groupedData).map(item => item.toFixed(2)),
      }
    ],
    tooltip: {
      trigger: "axis"
    }
  }

  return (
    <ReactEcharts
      option={options}
    />
  )

};

export default KPIBarChartReceiptsGroupedByProjects;