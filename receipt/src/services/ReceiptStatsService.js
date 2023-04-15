export const summedByDates = (receipts) => {
    // receipts are an array of objects [{...},{...},{...}, ...]
    // we use reduce to iterate 
    const data = receipts.reduce((date, receipt) => {
        // pick date of receipt
        const {receiptDate} = receipt;
        // create Date flattend to days
        const dateKey = new Date(receiptDate).setHours(0,0,0,0);
        // create key and set to 0 or recreate key and set to previous value
        date[dateKey] = date[dateKey] || 0;
        // add netVal to existing Values
        date[dateKey] += receipt.netVal;
        return date;
    }, {});
    // convert data according to echarts needs => [{timestamp, float}, {timestamp, float}, ...]
    return Object.entries(data).map(item => Object.assign(item, { 0: parseInt(item[0]), 1: item[1].toFixed(2) }));
};

export const summedByMonths = (receipts) => {
    const data = receipts.reduce((dates, receipt) => {
        const {receiptDate} = receipt;
        // set all dates of the current month to first day and hour flattens to the month and keeps the date object as a key
        const dateKey = new Date((new Date(receiptDate)).setHours(0,0,0,0)).setDate(1);
        dates[dateKey] = dates[dateKey] || 0;
        dates[dateKey] += receipt.netVal;
        return dates;
    }, {});
    // convert data according to echarts needs => [{timestamp, float}, {timestamp, float}, ...]
    return Object.entries(data).map(item => Object.assign(item, { 0: parseInt(item[0]), 1: item[1].toFixed(2) }));
}

export const summedByProjects = (receipts) => {
    const data = receipts.reduce((projects, receipt) => {
        const {project} = receipt;
        projects[project] = projects[project] || 0;
        projects[project] += receipt.netVal;
        return projects;
    }, {});
    // convert data according to echarts needs => [[string, Float], [string, Float], ...]
    return Object.entries(data).map(item => Object.assign(item, { 0: item[0], 1: parseFloat(item[1].toFixed(2)) })).sort();
}

export const distributedByProjects = (receipts) => {
    const data = receipts.reduce((projects, receipt) => {
        const {project} = receipt;
        projects[project] = projects[project] || 0;
        projects[project] += 1;
        return projects;
    }, {});
    // convert data according to echarts needs => [{name: String, value: int}, {name: String, value: int}, ...]
    return Object.entries(data).map(item => Object.assign({}, {name: item[0], value: item[1]}));
}