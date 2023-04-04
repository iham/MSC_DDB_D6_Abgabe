import { faker } from '@faker-js/faker';

import Receipt from '../data/Receipt';

const SampleDataService = (receiptService, projectTypes, ustTypes, amount) => {
    const dateMax = new Date();
    let dateMin = new Date();
    dateMin.setFullYear(dateMin.getFullYear() - 3);
    for (let i = 0; i < amount; i++) {
        let randomProject = projectTypes[
            Math.floor(Math.random()*projectTypes.length)
        ].name;
        let randomUST = ustTypes[
            Math.floor(Math.random()*ustTypes.length)
        ].value;
        let randomVal = Math.random() * (500.0 - 0.01) + 0.01;
        const receipt = new Receipt(
          faker.date.between(dateMin, dateMax),
          `Description Text ${i}`,
          randomProject,
          randomVal,
          randomUST,
          `Comment Text ${i}`,
        );
        receiptService.add(receipt);
      }
}

export default SampleDataService;