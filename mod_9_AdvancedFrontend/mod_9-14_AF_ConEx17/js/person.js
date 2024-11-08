export class Person {
    #birthday = 'mm-dd-yyyy';

    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = birthday;
    }

    get birthday() {
        return this.#birthday;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        const [month, day, year] = this.#birthday.split('-').map(Number);
        const birthDay = new Date(year, month - 1, day);
        const now = new Date();
        let age = now.getFullYear() - birthDay.getFullYear();
        if (
            now.getMonth() < birthDay.getMonth() ||
            (now.getMonth() === birthDay.getMonth() && now.getDate() < birthDay.getDate())
        ) {
            age--;
        }

        const ageCount = age % 10;
        const ageName =
            ageCount === 1 && age !== 11 ? "год" :
                (ageCount >= 2 && ageCount <= 4) && (age < 10 || age > 20) ? "года" :
                    "лет";

        return `${age} ${ageName}`;
    }
}