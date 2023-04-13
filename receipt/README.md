
# Receipt Collector

MSc DDB D6

Welcome!

Receipt Collector is a React web app that allows users to organize their receipts. New receipt data can be added through a form that also automatically calculates the selected taxes. All available receipts can be viewed in the *Receipt List*, where the receipts are sorted by date. Here, detailed information for each receipt can be viewed and individual receipts can also be deleted. Additionally, the sum total of all receipts is calculated and shown at the bottom of the list. On the *Stats* page, receipt data is visually displayed using ECharts in four different viewing options. The *Projects* page shows all the projects to which the individual receipts can be assigned to and additionally lists the status of each project.

This project was developed by Group International


## Install & Run

After unpack change into project directory and run:


```bash
yarn install
```

```bash
yarn start
```
This will start the project and you can visit it by opening a browser window by entering ```localhost:3000```


## Instructions

* New receipts can be added on the *Receipts* page. Click on *Create Receipt* and enter the data of your receipt. You can add the date, select the project this receipt belongs to, add a description and a comment and fill in the net value. Select the respective tax option and the gross value is automatically calculated. After clicking the *Create Receipt* button, the new receipt is added to the Receipt List
* The *Receipt List* shows all available receipts sorted by date. At the bottom of the list, the sum total of all receipts can be found. To view details for a specific receipt, click on the card icon for this receipt. Individual receipts can be deleted by clicking on the trash icon.
* The data is visualized on the *Stats* page. Here you can view the receipt data in four different charts that are either grouped by date, month or by project.
* The *Projects* page lists all the projects to which the individual receipts can be assigned to and additionally lists the activity status of each project.

Data is kept in local storage.


## Time spent

~20h were used to create this project.


## Development Browser

Firefox Developer Edition (version 111)


## Libraries used

| Name              | Version | License            | URL |
|-------------------|---------|--------------------|-----|
| bootstrap         | ^5.2.3  | MIT License        | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)|
| cross-env         | ^7.0.3  | MIT License        | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)|
| echarts           | ^5.4.2  | Apache License 2.0 | [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)|
| echarts-for-react | ^3.0.2  | MIT License        | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)|
| faker-js          | ^7.6.0  | MIT License        | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)|
| react             | ^18.2.0 | MIT License        | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)|
| react-datepicker  | ^4.11.0 | MIT License        | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)|
| react-icons       | ^5.2.3  | MIT License        | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)|
| react-router-dom  | ^6.10.0 | MIT License        | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)|


## TODOS
- error on form: no date -> button dis/enable
- startpage from readme intro text including links to pages
