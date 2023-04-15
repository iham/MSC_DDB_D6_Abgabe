import { useOutletContext } from "react-router-dom";
import { useState } from 'react';

import SampleDataService from './services/SampleDataService';

import ReceiptForm from './component/ReceiptForm';
import ReceiptList from './component/ReceiptList';

const Receipts = (props) => {
    const [projectTypes, ustTypes, receiptService, receiptStorageService, receipts, setReceipts] = useOutletContext();
    const [showReceiptForm, setShowReceiptForm] = useState(false);

    const handleCreateSampleReceipts = () => {
        SampleDataService(
            receiptService,
            projectTypes,
            ustTypes,
            250
        )
        setReceipts([...receiptService.receipts]);
        receiptStorageService.save();
    }
    const handleDeleteReceipt = (receipt) => {
        receiptService.remove(receipt);
        setReceipts([...receiptService.receipts]);
        receiptStorageService.save();
    }

    const toggleShowReceiptForm = () => {
        setShowReceiptForm(!showReceiptForm);
    }

    const handleSaveReceipt = (receipt) => {
        receiptService.add(receipt);
        setReceipts([...receiptService.receipts]);
        receiptStorageService.save();
        toggleShowReceiptForm();
    }


    return (
        <>
            <header>
                <hgroup>
                    <h1>Receipts</h1>
                    <h4 className="mb-5">MSC DDB D6</h4>
                </hgroup>
            </header>
            <p className="lead">Either you enter a new Receipt by hitting the green button, or you create a set of 10 sampled Receipts using the yellow one.</p>
            <div className="row gx-5">
                <div className="col-sm-12 col-lg-6">
                    {!showReceiptForm &&
                        <>
                            <button className='btn btn-success m-3'
                                onClick={evt => setShowReceiptForm(!showReceiptForm)}>Create Receipt</button>
                            <button className='btn btn-warning m-3'
                                onClick={evt => handleCreateSampleReceipts()}>Create Receipts using Sample Data</button>
                        </>
                    }
                    {showReceiptForm &&
                        <ReceiptForm
                            toggleShowReceiptForm={toggleShowReceiptForm}
                            handleSaveReceipt={handleSaveReceipt}
                            projectTypes={projectTypes}
                            ustTypes={ustTypes}
                        />
                    }
                </div>
                <div className="col-sm-12 col-lg-6">
                    <ReceiptList
                        handleDeleteReceipt={handleDeleteReceipt}
                        receipts={receipts}
                    />
                </div>
            </div>

        </>
    );
};

export default Receipts