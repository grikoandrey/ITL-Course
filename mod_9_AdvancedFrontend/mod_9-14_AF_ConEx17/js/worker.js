import {Person} from "./person.js";

export class Worker extends Person {
    #rate = 1000;
    #days = 0;

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
    }

    get rate() {
        return this.#rate;
    }

    set rate(value) {
        if (value >= 1000) {
            this.#rate = value;
        } else {
            alert('Определите ставку не менее 1000 рублей');
        }
    }

    get days() {
        return this.#days;
    }

    addDays(workDays) {
        const currentMonth = new Date().getMonth() + 1;
        const countDays = new Date(0, currentMonth, 0).getDate();

        if (!workDays || workDays <= 0 || workDays + this.#days > countDays) {
            alert('Количество рабочих дней должно быть больше 0 и не более дней в текущем месяце');
        } else {
            this.#days += workDays
            return this.#days;
        }
    }

    getSalary() {
        const currentMonth = new Date().getMonth() + 1;
        const birthMonth = new Date(this.birthday).getMonth() + 1;

        if (currentMonth === birthMonth) {
            return (this.#rate * this.#days) * 1.1;
        } else {
            return this.#rate * this.#days;
        }
    }

    static whoWorkedMore(...workers) {
        if (!workers.length) return;
        let maxDays = 0;
        let topWorkers = [];

        workers.forEach((item) => {
            if (item.days > maxDays) {
                maxDays = item.days;
                topWorkers = [item]; // Очистка массива и добавление текущего работника
            } else if (item.days === maxDays) {
                topWorkers.push(item);
            }
        })
        topWorkers.forEach(worker => {
            console.log(`Больше всех отработал ${worker.getFullName()}. Количество рабочих дней - ${maxDays}`);
        });
    }

    static whoIsYounger(...workers) {
        if (!workers.length) return;
        let minAge = new Date(-1,0,0);
        // console.log(minAge);
        let youngestWorkers = [];

        workers.forEach((item) => {
            let dataBd = new Date(item.birthday);
            // console.log(dataBd);
            if (dataBd > minAge) {
                minAge = dataBd;

                youngestWorkers = [item];
            } else if (dataBd === minAge) {
                youngestWorkers.push(item);
            }
        });
        youngestWorkers.forEach(worker => {
            console.log(`Самый молодой сотрудник ${worker.getFullName()}. ${worker.getAge()}`);
        });
    }
}