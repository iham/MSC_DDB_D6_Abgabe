import { useOutletContext } from "react-router-dom";

const StatsPage = (props) => {
    const [projectTypes, ustTypes, receiptService, receiptStorageService, receipts, setReceipts] = useOutletContext();

    return (
        <>
            <header>
                <hgroup>
                    <h1>Statistics</h1>
                    <h4 className="mb-5">MSC DDB D6</h4>
                </hgroup>
            </header>
            <p className="lead">Using ECharts for some visuals.</p>
            <div className="row">
                <div className="col-6 col-md-3">
                    <img src="./images/echarts_logo.png" alt="Apache ECharts" className="img-fluid"/>
                </div>
            </div>
            
            <div className="row justify-content-md-center">
                <div className="col col-lg-10">
                    <div className="row g-5">
                        <div className="col-md-6 p-5">
                            <h2>Sorted by Date</h2>
                            <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph" className="img-fluid" alt=""></img>
                        </div>
                        <div className="col-md-6 p-5">
                            <h2>Grouped by Month</h2>
                            <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph" className="img-fluid" alt=""></img>
                        </div>
                        <div className="col-md-6 p-5">
                            <h2>Grouped by Project</h2>
                            <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph" className="img-fluid" alt=""></img>
                        </div>
                        <div className="col-md-6 p-5">
                            <h2>Distributed by Project</h2>
                            <img src="https://via.placeholder.com/1200x1200/cccccc/969696?text=Graph" className="img-fluid" alt=""></img>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsPage;