'use strict';
// let my = 1;
//
// function myFunction() {
//     return 'ok';
// }
// myFunction();
// console.log(my);
//------------------------------
// let a = 1;
// let b = 2;
// function myFunc(param) {
//     let myVar = param + a + b;
//
//     function showSum() {
//         console.log(myVar);
//     }
//     return showSum;
// }
// a = 3;
// b = 4;
// let sumFunc = myFunc(1);
// sumFunc();
//------------------------------
// function myFunc() {
//     console.log(this);
// }
// myFunc();
//--------------------------------
// let objects = [
//     {
//         name: 'Alexey',
//         lastName: 'Borisov',
//         age: 21,
//     },
//     {
//         name: 'Alexey',
//         lastName: 'Sdobnov',
//         age: 31,
//     },
//     {
//         name: 'Vitaliy',
//         lastName: 'Ozonov',
//         age: 36,
//     },
// ];
//
// objects.forEach(obj => {
//     obj.getString = getString;
// })
//
// function getString() {
//     return `${this.name} ${this.lastName}, Возраст: ${this.age}`;
// }

let obj = {
    name: 'Alexey',
    lastName: 'Borisov',
    age: 21,
    // getString() {
        // return `${this.name} ${this.lastName}, Возраст: ${this.age}`;
        // console.log(`${this.name} ${this.lastName}, Возраст: ${this.age}`);
    // }
}
function getString() {
    console.log(`${this.name} ${this.lastName}, Возраст: ${this.age}`);
}


// console.log(obj.getString());
setTimeout(function () {
    getString.call(obj);
    getString.apply(obj, []);
}, 1000);
setTimeout(getString.bind(obj), 2000);
// let my = obj.getString;
// console.log(my());
// console.log(objects[0].getString());
// console.log(objects[1].getString());
// console.log(objects[2].getString());