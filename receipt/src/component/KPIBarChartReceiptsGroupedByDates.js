import ReactEcharts from "echarts-for-react";

const KPIBarChartReceiptsGroupedByDates = (props) => {
  const {groupedData} = props;
  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: [{
      type: "time",
      axisLabel: {
        formatter: '{dd}.{MM}.{yyyy}',
      },
    }],
    yAxis: {
      type: "value"
    },
    series: [
      {
        type: "bar",
        showBackground: true,
        smooth: true,
        data: Object.entries(groupedData).map(entry => Object.assign(entry, { 0: +entry[0], 1: parseInt(entry[1]) })),
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

export default KPIBarChartReceiptsGroupedByDates;