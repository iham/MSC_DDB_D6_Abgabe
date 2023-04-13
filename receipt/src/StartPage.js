import { Link } from 'react-router-dom';

const StartPage = (props) => {
    return (
        <>
            <header>
                <hgroup>
                    <h1>Start Page</h1>
                    <h4 className="mb-5">MSC DDB D6</h4>
                </hgroup>
            </header>
            
            <p className="lead">As for this Proof of Concept, you can add Receipts on your own or create Samples to view data representation.</p>
            <p>
                README.md content here...
                go to <Link to="/receipts">receipts</Link> receipts for ...
                <a href="/receipts">receipts but WRONG!!!</a>
            </p>
        </>
    );
};

export default StartPage;