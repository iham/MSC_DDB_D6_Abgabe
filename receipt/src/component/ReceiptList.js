import ReceiptItem from "./ReceiptItem";
import { BsFillGearFill } from "react-icons/bs";

const ReceiptList = props => {
    const { receipts } = props;
    return (
        <>
            <h2>Receipt List:</h2>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Project</th>
                        <th scope="col">Net</th>
                        <th scope="col">UST</th>
                        <th scope="col">Gross</th>
                        <th scope="col">Comment</th>
                        <th scope="col" className="text-end"><BsFillGearFill /></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    {receipts.map((item, key) => {
                        return <ReceiptItem key={`receipt-list-item-${key}`} itemNum={key + 1} receipt={item} handleDeleteReceipt={props.handleDeleteReceipt} />
                    })}
                </tbody>
            </table>
        </>
    )
};

export default ReceiptList;