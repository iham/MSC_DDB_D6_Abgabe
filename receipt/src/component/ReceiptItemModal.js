const ReceiptItemModal = (props) => {
    const receipt = props.receipt || undefined;
    const date = receipt?.receiptDate?.toLocaleDateString('de-AT');
    const description = receipt?.description;
    const project = receipt?.project;
    const netVal = receipt?.netVal?.toFixed(2);
    const ust = receipt?.ust;
    const grossVal = receipt?.grossVal?.toFixed(2);
    const comment = receipt?.comment;
    return (
        <div className="modal fade" tabIndex="-1" id="receiptModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Receipt Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {receipt &&
                            <>
                            {date && <p>Date: {date}</p>}
                            {description && <p>Description: {description}</p>}
                            {project && <p>Project: {project}</p>}
                            {netVal && <p>NetVal: € {netVal}</p>}
                            {ust >= 0 && <p>UST: {ust}%</p>}
                            {grossVal && <p>GrossVal: € {grossVal}</p>}
                            {comment && <p>Comment: {comment}</p>}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReceiptItemModal;