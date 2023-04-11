import { useEffect, useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import de from 'date-fns/locale/de';
import Receipt from "../data/Receipt";
registerLocale('de', de);
setDefaultLocale('de');

const ReceiptForm = props => {
    // safe form fields as states to handle changes and pass them to a receipt obj
    const [state, setState] = useState({
        receiptDate: new Date(),
        description: '',
        project: '',
        netVal: 0,
        ust: props.ustTypes[0].value,
        comment: '',
    });
    
    // next to the fields we need a receipt object to calc grossVal
    const [receipt, setReceipt] = useState(new Receipt(...Object.values(state)));
    const [grossVal, setGrossVal] = useState(receipt.grossVal);
    
    useEffect(() => {
        setGrossVal(receipt.grossVal);
    }, [receipt.grossVal]);

    const [disabledSubmit, setDisabledSubmit] = useState(true);
            
    const handleInput = (evt) => {
        // we need both updated ... state for display, receipt for calculations
        state[evt.target.name] = evt.target.value;
        receipt[evt.target.name] = state[evt.target.name];
        setState({...state});
        setReceipt(receipt);

        // enable saving if requirements are fullfilled
        if (state.receiptDate && state.description && state.netVal && state.ust)
            setDisabledSubmit(false);
        else
            setDisabledSubmit(true);
    }

    const handleDateInput = (date) => {
        // we need both updated ... state for display, receipt for calculations
        const item = state;
        item["receiptDate"] = date;
        receipt["receiptDate"] = date;
        setState({...item});
        setReceipt(receipt);
    }

    const handleSave = (evt) => {
        evt.preventDefault();
        props.handleSaveReceipt(receipt);
    }

    return (
        <>
            <h2>Add new Receipt</h2>
            <form onSubmit={evt => handleSave(evt)}>
                <div className="mb-3">
                    <label htmlFor="receiptDate" className="form-label">Date</label>
                    <DatePicker id="receiptDate" 
                        selected={state.receiptDate}
                        onChange={date => handleDateInput(date)}
                        dateFormat="dd.MM.yyyy"
                        className="form-control"
                        required
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input className="form-control"
                        id="description"
                        name="description"
                        onChange={evt => handleInput(evt)}
                        value={state.description}
                        placeholder="Insert Description"
                        required
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="project" className="form-label">Project</label>
                    <select className="form-select"
                        name="project"
                        id="project"
                        value={state.project}
                        onChange={evt => handleInput(evt)}
                        >
                        <option value="">None</option>
                        {props.projectTypes.map((project, key) => {
                            return <option key={key}
                                value={project.name}
                                disabled={!project.active}>
                                    {project.name}
                                </option>
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="netVal" className="form-label">Net Value</label>
                    <input className="form-control"
                        id="netVal"
                        name="netVal"
                        type="number"
                        onChange={evt => handleInput(evt)}
                        value={state.netVal}
                        step="0.01"
                        placeholder="Insert Net Val"
                        required
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="ust" className="form-label">UST</label>
                    <select className="form-select"
                        name="ust"
                        id="ust"
                        value={state.ust}
                        onChange={evt => handleInput(evt)}
                        required
                        >
                        {props.ustTypes.map((ust, key) => {
                            return <option key={key} value={ust.value}>{ust.name}</option>
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="grossVal" className="form-label">Gross Value</label>
                    <input className="form-control"
                        name="grossVal"
                        id="grossVal"
                        type="text"
                        disabled
                        value={grossVal}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea className="form-control"
                        name="comment"
                        id="comment"
                        onChange={evt => handleInput(evt)}
                        value={state.comment}
                        ></textarea>
                </div>
                <button className='btn btn-success m-3' disabled={disabledSubmit}
                    onClick={evt => handleSave(evt)}>Create Receipt</button>
                <button className='btn btn-danger m-3'
                    onClick={evt => props.toggleShowReceiptForm()}>Abort</button>
            </form>
        </>
    )
}

export default ReceiptForm