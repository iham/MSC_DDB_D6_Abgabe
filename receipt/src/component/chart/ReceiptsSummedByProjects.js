import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

/**
 * Description 
 * @date 4/14/2023 - 9:07:07 AM
 * @author Markus Hilbert (Functional Component & Data) 
 * @author Hannes Brottrager (Visualization)
 * @description this Functional Component (ReceiptsSummedByProjects) creates a BarChart using Apache echarts; Data supported by method (summedByProjects(receipts))
 * @description Visualization by LinearGradient with labels
 * @description Tooltip from projectname and sum(netVal) while mouse-over
 * @param {*} props
 * @returns {ReactEcharts}
 */
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
        label: {
          show: true,
          position: 'top'
        },
        showBackground: false,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
      },
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