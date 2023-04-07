import Receipt from '../data/Receipt.js';

class ReceiptStorageService {
    #storageName = 'ReceiptStorageMSCDDBD6TI';
    #receiptService;
    constructor(receiptService, storageName='') {
        this.#receiptService = receiptService;
        this.storageName = storageName;
        this.#load();
    }
    
    get storageName () {
        return this.#storageName;
    }
    set storageName (storageName) {
        if (storageName === '')
            storageName = this.#storageName;
        this.#storageName = storageName;
    }

    #load() {
        let data = localStorage.getItem(this.storageName);
        if (data) {
            let receipts = JSON.parse(data)
                .map((jsonItem) => JSON.parse(jsonItem))
                .map(obj => new Receipt(
                    new Date(obj.receiptDate),
                    obj.description,
                    obj.project,
                    obj.netVal,
                    obj.ust,
                    obj.comment
                ));
            this.#receiptService.receipts = receipts;
        }
    }
    save() {
        // jsonify receipts array and push to localstorage
        let data = this.#receiptService.receipts.map(
            receipt => JSON.stringify(receipt)
        );
        localStorage.setItem(
            this.#storageName,
            JSON.stringify(data)
        )
    }
}

export default ReceiptStorageService