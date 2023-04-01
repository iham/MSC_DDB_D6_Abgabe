import ReceiptItem from "./ReceiptItem";

const ReceiptList = props => {
    const { receipts } = props;
    return (
        <>
        <h3>Receipt List:</h3>
        {receipts.map(item => {
            return <ReceiptItem receipt={item} />
        })}
        </>
    )
};

export default ReceiptList;