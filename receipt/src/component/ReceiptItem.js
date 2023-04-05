import {BsFillTrashFill} from 'react-icons/bs';

const ReceiptItem = props => {
    const {receipt, itemNum} = props;
    return (
        <tr className={receipt.netVal>400?'table-danger':''}>
            <td>{itemNum}</td>
            <td>{receipt.receiptDate?.toLocaleDateString('de-AT')}</td>
            <td>{receipt.description}</td>
            <td>{receipt.project}</td>
            <td className="text-end">€ {receipt.netVal.toFixed(2)}</td>
            <td className="text-end">{receipt.ust}%</td>
            <td className="text-end">€ {receipt.grossVal.toFixed(2)}</td>
            <td>{receipt.comment}</td>
            <td className="text-end"><button className='btn p-0' onClick={(evt) => props.handleDeleteReceipt(receipt)}><BsFillTrashFill/></button></td>
        </tr>
    )
};

export default ReceiptItem;