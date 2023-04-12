import { useOutletContext } from "react-router-dom";
import KPIBarChartReceiptsGroupedByDates from "./component/KPIBarChartReceiptsGroupedByDates";
import KPIBarChartReceiptsGroupedByMonths from "./component/KPIBarChartReceiptsGroupedByMonths";
import KPIBarChartReceiptsGroupedByProjects from "./component/KPIBarChartReceiptsGroupedByProjects";
import KPIPieChartReceiptsDistributedByProjects from "./component/KPIPieChartReceiptsDistributedByProjects";

import {receiptsGroupedAndSummedByDates, receiptsGroupedAndSummedByMonths, receiptsGroupedAndSummedByProjects, receiptsDistributedByProjects} from './services/ReceiptStatsService';

const StatsPage = (props) => {
    const [projectTypes, ustTypes, receiptService, receiptStorageService, receipts] = useOutletContext();

    const resGroupedAndSummedByDates = receiptsGroupedAndSummedByDates(receipts);
    const resGroupedAndSummedByMonths = receiptsGroupedAndSummedByMonths(receipts);
    const resGroupedAndSummedByProjects = receiptsGroupedAndSummedByProjects(receipts);
    const resDistributedByProjects = receiptsDistributedByProjects(receipts);
    // debugger;
    return (
        <>
            <header>
                <hgroup>
                    <h1>Statistics</h1>
                    <h4 className="mb-5">MSC DDB D6</h4>
                </hgroup>
            </header>
            <div className="row">
                <div className="col-6 col-md-3">
                    <img src="./images/echarts_logo.png" alt="Apache ECharts" className="img-fluid"/>
                </div>
            </div>
            <p className="lead">Using Apache ECharts for some visuals.</p>
            
            <div className="row justify-content-md-center">
                <div className="col">
                    <div className="row g-5">
                        <div className="col-md-12 p-md-5">
                            <h4>Grouped by Date</h4>
                            <p>How much was spent per Day?</p>
                            <KPIBarChartReceiptsGroupedByDates groupedData={resGroupedAndSummedByDates}/>
                            {/* {!resGroupedAndSummedByDates && <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph+Placeholder+(no+Data)" className="img-fluid" alt=""></img>} */}
                        </div>
                        <div className="col-md-12 p-md-5">
                            <h4>Grouped by Month</h4>
                            <p>How much was spent per Month?</p>
                            <KPIBarChartReceiptsGroupedByMonths groupedData={resGroupedAndSummedByMonths}/>
                            {/* {!resGroupedAndSummedByMonths && <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph+Placeholder+(no+Data)" className="img-fluid" alt=""></img>} */}
                        </div>
                        <div className="col-md-6 p-md-5">
                            <h4>Grouped by Project</h4>
                            <p>How much was spent per Project?</p>
                            <KPIBarChartReceiptsGroupedByProjects groupedData={resGroupedAndSummedByProjects}/>
                            {/* {!resGroupedAndSummedByProjects && <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph+Placeholder+(no+Data)" className="img-fluid" alt=""></img>} */}
                        </div>
                        <div className="col-md-6 p-md-5">
                            <h4>Distributed by Projects</h4>
                            <p>How many receipts were assigned per Project?</p>
                            <KPIPieChartReceiptsDistributedByProjects groupedData={resDistributedByProjects} />
                            {/* <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph" className="img-fluid" alt=""></img> */}
                            {/* {!resGroupedAndSummedByProjects && <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph+Placeholder+(no+Data)" className="img-fluid" alt=""></img>} */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsPage;