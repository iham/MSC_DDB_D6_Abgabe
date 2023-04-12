import ReactEcharts from "echarts-for-react";


const KPIPieChartReceiptsDistributedByProjects = (props) => {
    const { groupedData } = props;
    const options = {
        title: {
            left: "center",
            top: "center"
        },
        series: [
            {
                type: "pie",
                radius: ["50%", "90%"],
                data: Object.entries(groupedData).map(item => Object.assign({}, {name: item[0], value: item[1]})),
            },
        ]
    }
    return (
        <ReactEcharts
            option={options}
        />
    )

};

export default KPIPieChartReceiptsDistributedByProjects;