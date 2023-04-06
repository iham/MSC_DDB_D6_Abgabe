import { useState } from 'react';

import ReceiptListItem from "./ReceiptListItem";
import ReceiptItemModal from "./ReceiptItemModal";
import { BsFillGearFill } from "react-icons/bs";

const ReceiptList = props => {
    const { receipts } = props;
    const [displayReceipt, setDisplayReceipt] = useState({});
    const handleSelectDisplayReceipt = (receipt) => {
        setDisplayReceipt(receipt);
    };
    const sum = receipts.reduce((acc, v) => acc+v.netVal, 0.0);
    return (
        <>
            <h2>Receipt List:</h2>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Project</th>
                        <th scope="col" className="text-end">Net</th>
                        <th scope="col" className="text-center"><BsFillGearFill /></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    {receipts.map((item, key) => {
                        return <ReceiptListItem
                            key={`receipt-list-item-${key}`}
                            itemNum={key + 1}
                            receipt={item}
                            handleDeleteReceipt={props.handleDeleteReceipt}
                            handleSelectDisplayReceipt={handleSelectDisplayReceipt}
                        />
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="text-end" colSpan={3}>Total</td>
                        <td className="text-end" >€ {sum.toFixed(2)}</td>
                        <td className="text-end"></td>
                    </tr>
                </tfoot>
            </table>
            {displayReceipt &&
                <ReceiptItemModal receipt={displayReceipt} />
            }
        </>
    )
};

export default ReceiptList;