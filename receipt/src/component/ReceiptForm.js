import { useState } from "react"

const ReceiptForm = props => {
    const [receipt, setReceipt] = useState({
        receiptDate: null,
        description: '',
        project: '',
        netVal: 0,
        ust: 0,
        grossVal: 0,
        comment: '',
    });
    const [disabled, setDisabled] = useState(true);

    const handleInput = (evt) => {
        //console.log(evt);
        setReceipt({ [[evt.target.name]]: evt.target.value });
        // enable saving if requirements are fullfilled
        if (receipt.receiptDate && receipt.description && receipt.netVal && receipt.ust) {
            setDisabled(false);
        }
        else
            setDisabled(true);
    }

    const handleSave = (evt) => {

    }

    const handleAbort = (evt) => {
        props.toggleShowReceiptForm();
    }

    return (
        <>
        <h2>Add new Receipt</h2>
        <button className='btn btn-success m-3' disabled={disabled}
          onClick={evt => props.handleSaveReceipt(receipt)}>Create Receipt</button>
        <button className='btn btn-danger m-3'
          onClick={evt => props.toggleShowReceiptForm()}>Abort</button>
        
        </>
    )
}

export default ReceiptForm