import { Link } from 'react-router-dom';


/**
 * Description 
 * @date 4/13/2023 - 8:20:27 PM
 * @author Markus Hilbert (Functional Component)
 * @author Felix Ossmann (Content) 
 * @description StartPage
 * @param {*} props
 * @returns {*}
 */
const StartPage = (props) => {
    return (
        <>
            <header>
                <hgroup>
                    <h1>Receipt Collector</h1>
                    <h4 className="mb-5">MSC DDB D6</h4>
                </hgroup>
            </header>


            <p className="lead">Welcome!</p>

            <p>Receipt Collector is a React web app that allows users to organize their receipts.</p>
            <p><Link to="/receipts">New receipts</Link> can be added through a form that also automatically calculates the selected taxes.</p>
            <p>All available receipts can be viewed in the <Link to="/receipts">Receipt List</Link>, where the receipts are sorted by date. Here, detailed information for each receipt can be viewed and individual receipts can also be deleted. Additionally, the sum total of all receipts is calculated and shown at the bottom of the list.</p>
            <p>On the <Link to="/stats">Stats</Link> page, receipt data is visually displayed using ECharts in four different viewing options.</p>
            <p>The <Link to="/projects">Projects</Link> page shows all the projects to which the individual receipts can be assigned to and additionally lists the status of each project.</p>
            <p>Documentation for this project can be found in the <a href="/docs/" target="_blank">JSDocs</a>.</p>
        </>
    );
};

export default StartPage;