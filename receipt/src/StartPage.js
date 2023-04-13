import { Link } from 'react-router-dom';

const StartPage = (props) => {
    return (
        <>
            <header>
                <hgroup>
                    <h1>Start Page</h1>
                    <h4 className="mb-5">MSC DDB D6</h4>
                    <h4 className="mb-5">Receipt Collector</h4>
                </hgroup>
            </header>
            
            
            <p className="lead">Welcome!</p>
        

<p>Receipt Collector is a React web app that allows users to organize their receipts.</p> 
<p><Link to="/Receipts">New receipts</Link> can be added through a form that also automatically calculates the selected taxes.</p> 
<p>All available receipts can be viewed in the <Link to="/Receipts">Receipt List</Link>, where the receipts are sorted by date. Here, detailed information for each receipt can be viewed and individual receipts can also be deleted. Additionally, the sum total of all receipts is calculated and shown at the bottom of the list.</p> 
<p>On the <Link to="/Stats">Stats</Link> page, receipt data is visually displayed using ECharts in four different viewing options.</p> 
<p>The <Link to="/Projects">Projects</Link> page shows all the projects to which the individual receipts can be assigned to and additionally lists the status of each project.</p>

        </>
    );
};

export default StartPage;