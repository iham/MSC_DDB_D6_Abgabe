import { useOutletContext } from "react-router-dom";

const StatsPage = (props) => {
    const [projectTypes, ustTypes, receiptService, receiptStorageService, receipts, setReceipts] = useOutletContext();

    return (
        <>
            <h1>Stats</h1>
            <p>Using ECharts for some visuals.</p>
        </>
    );
};

export default StatsPage;