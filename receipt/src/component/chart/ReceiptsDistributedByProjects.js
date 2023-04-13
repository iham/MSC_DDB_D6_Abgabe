import ReactEcharts from "echarts-for-react";


const ReceiptsDistributedByProjects = (props) => {
    const { data } = props;
    const options = {
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
        ]
    }
    return (
        <ReactEcharts
            option={options}
        />
    )

};

export default ReceiptsDistributedByProjects;