import {Worker} from "./worker.js";


let worker1 = new Worker('Bob', 'Gordon', '03-25-1915', 'manager');
let worker2 = new Worker('John', 'Smith', '07-10-1909', 'frontend developer');
let worker3 = new Worker('Alice', 'Brown', '01-15-1985', 'designer');
let worker4 = new Worker('Michael', 'White', '11-05-1992', 'developer');
let worker5 = new Worker('Emily', 'Davis', '09-30-1995', 'QA engineer');
let worker6 = new Worker('James', 'Wilson', '02-20-1980', 'project manager');

// console.log(person);

worker1.addDays(20);
worker2.addDays(22);
worker3.addDays(15);
worker4.addDays(17);
worker5.addDays(10);
worker6.addDays(25);

worker1.rate = 3500;
worker2.rate = 1500;
worker3.rate = 1000;
worker4.rate = 1800;
worker5.rate = 2000;
worker6.rate = 3000;

let workers = [worker1, worker2, worker3, worker4, worker5, worker6];

if (workers.length > 0) {
    workers.forEach(worker => {
        console.log(`${worker.getFullName()} - ${worker.getSalary().toFixed(0)} рублей`);
    })
}
Worker.whoWorkedMore(...workers);
Worker.whoIsYounger(...workers);