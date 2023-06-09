import ReactEcharts from "echarts-for-react";


/**
 * Description 
 * @date 4/14/2023 - 9:29:05 AM
 * @author Markus Hilbert (Functional Component & Data) 
 * @author Hannes Brottrager (Visualization)
 * @description this Functional Component (ReceiptsDistributedByProjects) creates a PieChart using Apache echarts; Data supported by method (distributedByProjects(receipts));
)
 * @param {*} props
 * @returns {ReactEcharts}
 */
const ReceiptsDistributedByProjects = (props) => {
    const { data } = props;
    const options = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}:<br/>{c} Receipts ({d}%)',
            },
         title: {
            left: "center",
            top: "center"
        },
        series: [
            {
                type: "pie",
                radius: ["50%", "90%"],
                data: data,
            },
        ],
        
        /* label: {
            formatter: '{b|{b}}{abg|}\n{hr|}\n  Receipts:{c}  {per|{d}%}  ',
            backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              c: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 28,
                align: 'center'
              },
              
              per: {
                color: '#fff',
                backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4
              }
            }
          } */
     }
    

    return (
        <ReactEcharts
            option={options}
        />
    )

};

export default ReceiptsDistributedByProjects;