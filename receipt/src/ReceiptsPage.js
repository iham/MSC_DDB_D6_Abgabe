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
          10
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
            <h1>Receipts</h1>
            <p>Either you enter a new Receipt by hitting the button, or you create a set of 10 sampled Receipts</p>
            <div className="row">
                <div className="col-6">
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
                    {receipts.length > 0 &&
                        <ReceiptList
                            handleDeleteReceipt={handleDeleteReceipt}
                            receipts={receipts}
                        />
                    }
                </div>
            </div>

        </>
    );
};

export default Receipts