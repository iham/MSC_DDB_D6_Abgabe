import { useEffect, useState } from 'react';

import ReceiptService from './services/ReceiptService';
import ReceiptStorageService from './services/ReceiptStorageService';

import { Outlet, NavLink } from 'react-router-dom';

/**
 * Generates a table head
 * @author Markus (the Great) Hilbert <iham.com>
 * @param {HTMLTableElement} table - The target HTML table
 * @param {Array} data - The array of cell header names
 * @return {void}
 */

/**
 * Description placeholder
 * @date 4/13/2023 - 8:35:04 PM
 *
 * @param {*} props
 * @returns {*}
 */

const App = props => {
  const [projectTypes, setProjectTypes] = useState([]);
  const [ustTypes, setUSTTypes] = useState([]);
  const [receiptService,] = useState(new ReceiptService());
  const receiptStorageService = new ReceiptStorageService(receiptService);
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

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Receipt Collector</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link"
                  to="/receipts">
                    Receipts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                  to="/stats">
                    Stats
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                  to="/projects">
                    Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                  to="/info">
                    Info
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link"
                  target="_blank"
                  href="/docs">
                    Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container mt-5 mb-5'>
        <Outlet context={[projectTypes, ustTypes, receiptService, receiptStorageService, receipts, setReceipts]} />
      </div>
    </>
  );
}

export default App;
