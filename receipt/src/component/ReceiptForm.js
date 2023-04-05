import { useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import de from 'date-fns/locale/de';
import Receipt from "../data/Receipt";
registerLocale('de', de);
setDefaultLocale('de');

const ReceiptForm = props => {
    const [state, setState] = useState({
        receiptDate: new Date(),
        description: '',
        project: '',
        netVal: 0,
        ust: props.ustTypes[0].value,
        grossVal: 0,
        comment: '',
    });
    const [disabledSubmit, setDisabledSubmit] = useState(true);
    const [receipt, setReceipt] = useState(new Receipt(...Object.values(state)));

    const handleInput = (evt) => {
        let item = state;
        receipt[evt.target.name] = item[evt.target.name] = evt.target.value;
        setReceipt(receipt);
        setState({...item});

        // enable saving if requirements are fullfilled
        if (state.receiptDate && state.description && state.netVal && state.ust)
            setDisabledSubmit(false);
        else
            setDisabledSubmit(true);
    }

    const handleDateInput = (date) => {
        const item = state;
        receipt["receiptDate"] = item["receiptDate"] = date;
        setState({...item});
    }

    const handleSave = (evt) => {
        evt.preventDefault();
        props.handleSaveReceipt(receipt)
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
                        value={receipt.grossVal}
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