import { useOutletContext } from "react-router-dom";
import KPIBarChartGroupedByProject from "./component/KPIBarChartGroupedByProject";

import {receiptsGroupedAndSummedByDates, receiptsGroupedAndSummedByMonths, receiptsGroupedAndSummedByProjects, receiptsGroupedAndPercentagedByProjects} from './services/ReceiptStatsService';

const StatsPage = (props) => {
    const [projectTypes, ustTypes, receiptService, receiptStorageService, receipts, setReceipts] = useOutletContext();

    const ressGroupedAndSummedByDate = receiptsGroupedAndSummedByDates(receipts);
    const resGroupedAndSummedByMonths = receiptsGroupedAndSummedByMonths(receipts);
    const resGroupedAndSummedByProjects = receiptsGroupedAndSummedByProjects(receipts);
    // const receiptsGroupedAndPercentagedByProjects = receiptsGroupedAndPercentagedByProjects(receipts);
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
                <div className="col col-lg-10">
                    <div className="row g-5">
                        <div className="col-md-6 p-md-5">
                            <h4>Sorted by Date</h4>
                            <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph" className="img-fluid" alt=""></img>
                        </div>
                        <div className="col-md-6 p-md-5">
                            <h4>Grouped by Month</h4>
                            <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph" className="img-fluid" alt=""></img>
                        </div>
                        <div className="col-md-6 p-md-5">
                            <h4>Grouped by Project</h4>
                            <KPIBarChartGroupedByProject groupedData={resGroupedAndSummedByProjects}/>
                        </div>
                        <div className="col-md-6 p-md-5">
                            <h4>Distributed by Project</h4>
                            <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph" className="img-fluid" alt=""></img>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsPage;