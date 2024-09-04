// let person = {
//     name: "John",
//     personalData: {
//         age: 20,
//         job: {
//             salary: 2000,
//             company: {
//                 title: 'Google',
//                 country: 'USA',
//             }
//         }
//     }
// }
//
// console.log(Object.keys(person));
// console.log(Object.keys(person.personalData));
// console.log(Object.keys(person.personalData.job));
// console.log(Object.keys(person.personalData.job.company));

// let name = 'name';
//
// console.log(person.name);
// console.log(person['name']);
// console.log(person[name]);
//
// if (person.hasOwnProperty('name')) {
//     console.log('name ok');
// } else {
//     console.log('no name ');
// }

// let basket = ['apple', 'banana', 'orange'];
//
// basket[1] = 'mango';
// basket.push('kiwi');
// basket.pop();
// basket.splice(1, 1);

// console.log(basket.indexOf('orange'));
//
// console.log(basket);
// console.log(basket.length);
//
// console.log(Object.keys(basket));

// basket.push(10);
// basket.push({name: 'John'});
// console.log(basket);
// console.log(basket[5].name);

// const number = 5;
// console.log(Math.pow(number, 3));

const name = 'Alex';
console.log(name.length);
console.log(name.includes('s'));
console.log(name.toUpperCase());
