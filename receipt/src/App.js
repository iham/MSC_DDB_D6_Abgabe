import { useEffect, useState } from 'react';
import ReceiptForm from './component/ReceiptForm';
import ReceiptList from './component/ReceiptList';

import ReceiptService from './services/ReceiptService';
import ReceiptStorageService from './services/ReceiptStorageService';
import SampleDataService from './services/SampleDataService';

const App = props => {
  const [projectTypes, setProjectTypes] = useState([]);
  const [ustTypes, setUSTTypes] = useState([]);
  const [receiptService, setReceiptService] = useState(new ReceiptService());
  const receiptStorageService = new ReceiptStorageService(receiptService);
  const [receipts, setReceipts] = useState(receiptService.receipts);
  const [showReceiptForm, setShowReceiptForm] = useState(false);
  // debugger
  // load data ONCE
  useEffect(() => {
    // loading project types
    const fetchProjects = async () => {
      const result = await fetch("/data/projects.json");
      const dataJson = await result.json();
      setProjectTypes([...dataJson]);
    };
    fetchProjects();
    // loading UST types
    const fetchUST = async () => {
      const result = await fetch("/data/ust.json");
      const dataJson = await result.json();
      setUSTTypes([...dataJson]);
    };
    fetchUST();
    // debugger
  }, []);

  const handleCreateSampleReceipts = () => {
    SampleDataService(
      receiptService,
      projectTypes,
      ustTypes,
      100
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
    <div className='container mt-5 mb-5' data-bs-theme="dark">
      <div className="row">
        <div className="col-6">
          <h1>Receipt Collector Demo</h1>
          <p>As for this Proof of Concept, you can add Receipts on your own or create Samples to view data representation.</p>
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
    </div>
  );
}

export default App;
