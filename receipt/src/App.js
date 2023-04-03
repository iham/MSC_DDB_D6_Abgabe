import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import ReceiptList from './component/ReceiptList';

import Receipt from './data/Receipt';
import ReceiptService from './services/ReceiptService';

import { faker } from '@faker-js/faker';

const App = props => {
  const [projectTypes, setProjectTypes] =  useState([]);
  const [ustTypes, setUSTTypes] =  useState([]);
  const [receiptService, setReceiptService] = useState(new ReceiptService());
  const [receipts, setReceipts] = useState(receiptService.receipts);

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
  }, []);

  const handleCreateSampleReceipts = () => {
      const pl = projectTypes.length;
      const ustl = ustTypes.length;
      const dateMax = new Date();
      let dateMin = new Date();
      dateMin.setFullYear(dateMin.getFullYear() - 3);
      for (let i = 0; i < 100; i++) {
        let randomProject = projectTypes[Math.floor(Math.random()*pl)].name;
        let randomUST = ustTypes[Math.floor(Math.random()*ustl)].value;
        let randomVal = Math.random() * (500.0 - 0.01) + 0.01;
        const receipt = new Receipt(
          faker.date.between(dateMin, dateMax),
          `Description Text ${i}`,
          randomProject,
          randomVal,
          randomUST,
          `Comment Text ${i}`,
        );
        receiptService.add(receipt);
      }
      setReceipts([...receiptService.receipts]);
  }
  const handleDeleteReceipt = (receipt) => {
    receiptService.remove(receipt);
    setReceipts([...receiptService.receipts]);
  }

  return (
    <div className='container mt-5 mb-5'>
      <h1>Receipt Collector</h1>
      <button className='btn btn-primary'
          onClick={evt => handleCreateSampleReceipts()}>Create Samples</button>
      <ReceiptList handleDeleteReceipt={handleDeleteReceipt} receipts={receipts}/>
    </div>
  );
}

export default App;
