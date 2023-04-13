import ReactEcharts from "echarts-for-react";

const ReceiptsSummedByDates = (props) => {
  const {data} = props;
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
        type: "bar",
        showBackground: true,
        smooth: true,
        data: data,
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

export default ReceiptsSummedByDates;