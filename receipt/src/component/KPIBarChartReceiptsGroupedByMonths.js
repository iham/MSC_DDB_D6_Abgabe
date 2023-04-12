import ReactEcharts from "echarts-for-react";

const KPIBarChartReceiptsGroupedByMonths = (props) => {
  const { groupedData } = props;

  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 60 },
    xAxis: [{
      type: "category",
      axisLabel: {
        formatter: '{value}',
      },
    }],
    yAxis: {
      type: "value"
    },
    series: [
      {
        type: "line",
        step: "start",
        smooth: true,
        data: Object.entries(groupedData).map(entry => Object.assign(entry, { 0: entry[0], 1: parseInt(entry[1]) })),
      }
    ],

    itemStyle: {
      barBorderRadius: 15,
      borderWidth: 5,
      borderType: 'solid',
      borderColor: '#73c0de',
      shadowColor: '#5470c6',
      shadowBlur: 3
    },

    tooltip: {
      trigger: "axis"
    },

    legend: {
      data: ["2023/03", "2023/02", "2023/04"],
      bottom: 5
    }


  }
  return (
    <ReactEcharts
      option={options}
    />
  )

};

export default KPIBarChartReceiptsGroupedByMonths;