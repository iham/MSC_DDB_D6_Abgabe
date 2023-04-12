import ReactEcharts from "echarts-for-react";

const KPIBarChartReceiptsGroupedByMonths = (props) => {
  const { groupedData } = props;

  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 60 },
    xAxis: [{
      type: "time",
      axisLabel: {
        formatter: '{MM}.{yyyy}',
      },
    }],
    yAxis: {
      type: "value"
    },
    dataset: {
      source: Object.entries(groupedData).map(entry => Object.assign(entry, { 0: parseInt(entry[0]), 1: entry[1].toFixed(2) })),
      dimensions: ['timestamp', 'netValSum'],
    },
    // dataZoom: [
    //   {
    //     type: 'inside',
    //     start: 0,
    //     end: 10
    //   },
    //   {
    //     start: 0,
    //     end: 10
    //   }
    // ],    
    series: [
      {
         type: 'line',
         encode: {
           x: 'timestamp',
           y: 'netValSum',
         }
      },
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
  }

  return (
    <ReactEcharts
      option={options}
    />
  )

};

export default KPIBarChartReceiptsGroupedByMonths;