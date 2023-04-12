export const receiptsGroupedAndSummedByDates = (receipts) => {
    return receipts.reduce((date, receipt) => {
        const {receiptDate} = receipt;
        // create Date flattend to days
        const dateKey = new Date(receiptDate).setHours(0,0,0,0);
        date[dateKey] = date[dateKey] || 0;
        date[dateKey] += receipt.netVal;
        return date;
    }, {});
};

export const receiptsGroupedAndSummedByMonths = (receipts) => {
    return receipts.reduce((dates, receipt) => {
        const {receiptDate} = receipt;
        // set all dates of the current month to first day and hour flattens to the month and keeps the date object as a key
        const dateKey = new Date((new Date(receiptDate)).setHours(0,0,0,0)).setDate(1);
        dates[dateKey] = dates[dateKey] || 0;
        dates[dateKey] += receipt.netVal;
        return dates;
    }, {});
}

export const receiptsGroupedAndSummedByProjects = (receipts) => {
    return receipts.reduce((projects, receipt) => {
        const {project} = receipt;
        projects[project] = projects[project] || 0;
        projects[project] += receipt.netVal;
        return projects;
    }, {});
}

export const receiptsDistributedByProjects = (receipts) => {
    return receipts.reduce((projects, receipt) => {
        const {project} = receipt;
        projects[project] = projects[project] || 0;
        projects[project] += 1;
        return projects;
    }, {});
}