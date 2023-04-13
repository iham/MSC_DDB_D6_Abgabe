import ReactEcharts from "echarts-for-react";


const ReceiptsSummedByProjects = props => {
  const {data} = props;
  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 60 },
    xAxis: {
      type: "category",
    },
    yAxis: {
      type: "value"
    },
    dataset: {
      source: data,
    },    
    series: [
      {
        type: "bar",
        smooth: true,
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

export default ReceiptsSummedByProjects;