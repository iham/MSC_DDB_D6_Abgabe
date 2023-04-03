class Receipt {
    #receiptDate;
    #description;
    #project;
    #netVal;
    #ust;
    #comment;

    constructor(
        receiptDate=null,
        description="",
        project="",
        netVal=0,
        ust=0,
        comment=""
    ) {
        this.receiptDate = receiptDate;
        this.description = description;
        this.project = project;
        this.netVal = netVal;
        this.ust = ust;
        this.comment = comment;
    }

    // getters 
    get receiptDate() {
        return this.#receiptDate;
    }
    get description() {
        return this.#description;
    }
    get project() {
        return this.#project;
    }
    get netVal() {
        return this.#netVal;
    }
    get ust() {
        return this.#ust;
    }
    get grossVal() {
        return this.netVal + (this.netVal/100 * this.ust);
    }
    get comment() {
        return this.#comment;
    }

    // setters
    set receiptDate(receiptDate) {
        this.#receiptDate = receiptDate;
    }
    set description(description) {
        this.#description = description;
    }
    set project(project) {
        this.#project = project;
    }
    set netVal(netVal) {
        this.#netVal = netVal;
    }
    set ust(ust) {
        this.#ust = ust;
    }
    set comment(comment) {
        this.#comment = comment;
    }
}

export default Receipt;