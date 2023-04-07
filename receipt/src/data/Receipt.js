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
        return this.netVal + (this.netVal/100) * this.ust;
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
        this.#netVal = parseFloat(netVal);
    }
    set ust(ust) {
        this.#ust = parseInt(ust);
    }
    set comment(comment) {
        if (typeof comment === 'number');
            comment = '';
        this.#comment = comment;
    }

    toJSON() {
        return {
            receiptDate: this.receiptDate,
            description: this.description,
            project: this.project,
            netVal: this.netVal,
            ust: this.ust,
            comment: this.comment,
        };
    }
}

export default Receipt;