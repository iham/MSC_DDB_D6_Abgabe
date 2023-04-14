import { useOutletContext } from "react-router-dom";
import ReceiptsSummedByDates from "./component/chart/ReceiptsSummedByDates";
import ReceiptsSummedByMonths from "./component/chart/ReceiptsSummedByMonths";
import ReceiptsSummedByProjects from "./component/chart/ReceiptsSummedByProjects";
import ReceiptsDistributedByProjects from "./component/chart/ReceiptsDistributedByProjects";

import {summedByDates, summedByMonths, summedByProjects, distributedByProjects} from './services/ReceiptStatsService';

/**
 * Description 
 * @date 4/13/2023 - 8:20:27 PM
 * @author Markus Hilbert (Functional Component & Data)
 * @description Statistics for Receipts
 * @param {*} props
 * @returns {*}
 */
const StatsPage = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [projectTypes, ustTypes, receiptService, receiptStorageService, receipts] = useOutletContext();

    const resSummedByDates = summedByDates(receipts);
    const resSummedByMonths = summedByMonths(receipts);
    const resSummedByProjects = summedByProjects(receipts);
    const resDistributedByProjects = distributedByProjects(receipts);
    const receiptsInfo = receipts.length > 0 ? `${receipts.length} Receipts (from ${receipts[receipts.length - 1].receiptDate.toLocaleDateString('de-AT')} to ${receipts[0].receiptDate.toLocaleDateString('de-AT')})` : "Receipts";
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
            <p className="lead">Using Apache ECharts for visualising {receiptsInfo}</p>
            
            <div className="row justify-content-md-center">
                <div className="col">
                    <div className="row g-5">
                        <div className="col-md-12 p-md-5">
                            <h4>Summed by Dates</h4>
                            <p>How much was spent per Day?</p>
                            {resSummedByDates.length > 0 && <ReceiptsSummedByDates data={resSummedByDates}/>}
                            {!resSummedByDates.length > 0 && <img src="https://via.placeholder.com/1600x400/cccccc/969696?text=Graph+Placeholder+(no+Data)" className="img-fluid" alt="Graph Placeholder (no Data)" />}
                        </div>
                        <div className="col-md-12 p-md-5">
                            <h4>Summed by Month</h4>
                            <p>How much was spent per Month?</p>
                            {resSummedByMonths.length > 0 && <ReceiptsSummedByMonths data={resSummedByMonths}/>}
                            {!resSummedByMonths.length > 0 && <img src="https://via.placeholder.com/1600x400/cccccc/969696?text=Graph+Placeholder+(no+Data)" className="img-fluid" alt="Graph Placeholder (no Data)" />}
                        </div>
                        <div className="col-md-6 p-md-5">
                            <h4>Summed by Project</h4>
                            <p>How much was spent per Project?</p>
                            {resSummedByProjects.length > 0 && <ReceiptsSummedByProjects data={resSummedByProjects}/>}
                            {!resSummedByProjects.length > 0 && <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph+Placeholder+(no+Data)" className="img-fluid" alt="Graph Placeholder (no Data)" />}
                        </div>
                        <div className="col-md-6 p-md-5">
                            <h4>Distributed by Projects</h4>
                            <p>How many receipts were assigned per Project?</p>
                            {resDistributedByProjects.length > 0 && <ReceiptsDistributedByProjects data={resDistributedByProjects} />}
                            {!resDistributedByProjects.length > 0 && <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph+Placeholder+(no+Data)" className="img-fluid" alt="Graph Placeholder (no Data)" />}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsPage;