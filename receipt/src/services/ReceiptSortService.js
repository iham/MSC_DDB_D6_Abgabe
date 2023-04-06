class ReceiptSortService {
    #sortedReceipts = [];
    constructor (receipts=[]) {
        this.sortedReceipts = receipts;
    }
    get sortedReceipts() {
        return this.#sortedReceipts;
    }
    set sortedReceipts(receipts) {
        // create a copy of the receipt array to not mutate the source of origin
        this.#sortedReceipts = [...receipts];
    }
    groupReceiptsByDate () {
        console.log("group receipts by Date and sum netVal for each");
        // {"day": "sumByDay"}
        // return this.#sortedReceipts.sort();
    }
    groupReceiptsByMonth() {
        console.log("group receipts by month and sum netVal for each")
    }
    groupReceiptsByProject() {
        console.log("group receipts by Project and sum netVal for each");
    }
}

export default ReceiptSortService;