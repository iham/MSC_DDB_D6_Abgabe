class ReceiptService {
    #receipts;

    constructor () {
        this.#receipts = [];
    }

    get receipts () {
        return this.#receipts;
    }


    add(receipt) {
        this.#receipts.push(receipt);
        this.#sortReceiptsByDate();
    }

    remove(receipt) {
        this.#receipts.splice(
            this.#receipts.findIndex((item) => item.compareReceipt(receipt)), 1
        );
    }
    set receipts (receipts) {
        this.#receipts = receipts;
        this.#sortReceiptsByDate();
    }
    #sortReceiptsByDate() {
        // sort dates descending
        this.#receipts.sort((a,b) => b.receiptDate - a.receiptDate);
    }
}

export default ReceiptService;