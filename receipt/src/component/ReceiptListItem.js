import {BsFillTrashFill, BsFileText} from 'react-icons/bs';

const ReceiptListItem = props => {
    const {receipt, itemNum} = props;
    return (
        <tr className={receipt.netVal>400?'table-danger':''}>
            <td>{itemNum}</td>
            <td>{receipt.receiptDate?.toLocaleDateString('de-AT')}</td>
            <td>{receipt.project}</td>
            <td className="text-end">€ {receipt.netVal.toFixed(2)}</td>
            <td className="text-center">
                <button type="button"
                    className="btn p-0"
                    data-bs-toggle="modal"
                    data-bs-target="#receiptModal"
                    onClick={(evt) => props.handleSelectDisplayReceipt(receipt)}>
                    <BsFileText/>
                </button>
            </td>
            <td className="text-center">
                <button className='btn p-0' onClick={(evt) => props.handleDeleteReceipt(receipt)}><BsFillTrashFill/></button>
            </td>
        </tr>
    )
};

export default ReceiptListItem;