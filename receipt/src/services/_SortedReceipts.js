class ReceiptSorter {
    #sortedReceipts = [];
    #sortName;
    constructor (receipts=[], sortName="sortByDate") {
        // create a copy of the receipt array to not mutate the source of origin
        this.#sortedReceipts = [...receipts];
        this.sortName = sortName;
        this.sortReceipts();
    }

    get sortedReceipts () {
        return this.#sortedReceipts;
    }

    get sortName() {
        return this.#sortName;
    }

    set sortName(sortName) {
        this.#sortName = sortName;
    }
}