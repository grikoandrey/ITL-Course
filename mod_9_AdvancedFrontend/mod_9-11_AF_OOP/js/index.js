class Personal {

    #companyName = 'itlogia';
    #personWord = 'сотрудник';

    constructor(name, lastName, position) {
        this.name = name;
        this.lastName = lastName;
        this.position = position;
    }

    showData() {
        console.log(`Сотрудник: ${this.name} ${this.lastName}, ${this.getWord()}: ${this.position}. Статус: ${this.word}. Организация: ${this.#companyName}`);
        // console.log(this);
    }

    getWord() {
        // some code
        return 'Должность';
    }

    get word() {
        // some code
        return this.#personWord;
    }

    set word(value) {
        //some check value
        this.#personWord = value;
    }

    get fullName() {
        return `${this.name} ${this.lastName}`;
    }

    static comparePersonPosition(person1, person2) {
        return person1.position === person2.position;
    }
}

class Employee extends Personal {
    getSalary() {
        // some code
        return 10000;
    }
}

class Freelancer extends Personal {
    calcCostPerHour() {
        // some code
        return 3 * 3000;
    }

    getWord() {
        // some code
        return 'Специализация';
    }
}

let employees = [
    ['Алексей', 'Малев', 'веб-разработчик'],
    ['Анастасия', 'Краснова', 'веб-разработчик'],
]

let employee1 = new Employee(employees[0][0], employees[0][1], employees[0][2]);
let employee2 = new Employee(employees[1][0], employees[1][1], employees[1][2]);

console.log(Personal.comparePersonPosition(employee1, employee2));

employees.forEach((item) => {
    let employee = new Employee(item[0], item[1], item[2]);
    employee.word = 'начальник';
    console.log(`зарплата: ${employee.getSalary()}`);
    // console.log(employee);
    // console.log(employee.#companyName);
    employee.showData();
    console.log(employee.fullName);
})

let freelancers = [
    ['Антон', 'Кротов', 'финансист'],
    ['Анна', 'Данова', 'SMM-менеджер'],
]

freelancers.forEach((item) => {
    let freelancer = new Freelancer(item[0], item[1], item[2]);
    freelancer.showData();
    console.log(`зарплата: ${freelancer.calcCostPerHour()}`);
})

console.log(employee1);

//добавление нового свойства к объекту к которому нет доступа
Personal.prototype.check = () => {
    alert(2);
}

employee1.check();