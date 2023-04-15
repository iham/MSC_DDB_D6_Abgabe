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
                            <table className="table table-hover table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th>Field</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {date &&
                                        <tr>
                                            <td>Date</td>
                                            <td>{date}</td>
                                        </tr>
                                    }
                                    {description &&
                                        <tr>
                                            <td>Description</td>
                                            <td>{description}</td>
                                        </tr>
                                    }
                                    {project &&
                                        <tr>
                                            <td>Project</td>
                                            <td>{project}</td>
                                        </tr>
                                    }
                                    {netVal &&
                                        <tr>
                                            <td>NetVal</td>
                                            <td>{netVal}</td>
                                        </tr>
                                    }
                                    {ust >= 0 &&
                                        <tr>
                                            <td>UST</td>
                                            <td>{ust}%</td>
                                        </tr>
                                    }
                                    {grossVal &&
                                        <tr>
                                            <td>GrossVal</td>
                                            <td>{grossVal}</td>
                                        </tr>
                                    }
                                    {comment &&
                                        <tr>
                                            <td>Comment</td>
                                            <td>{comment}</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReceiptItemModal;