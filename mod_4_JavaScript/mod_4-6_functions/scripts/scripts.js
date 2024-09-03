// function run(name) {
//     console.log(`${name}, Hello World!`);
//     console.log(`${name}, Hello Space!`);
//     console.log(`Hello, ${person.name}!`);
// }

// let coef = 4;
//
// let myObj = {
//     resObj: function (a, b, c = 1) {
//         if (a === 0) {
//             return null;
//         }
//         let sum = a + b * c;
//         return sum + c + coef;
//     }
// }
// let sumFun = function (a, b, c = 1) {
//  let sum = a + b * c;
//  return sum + c;
// }


// function res (a, d) {
//  console.log(a + d);
// }
//
// res(sumFun(1, 2, 2), 4)

// let result = myObj.resObj(1, 3, 4);
// let result2 = myObj.resObj(0, 5, 6);
// console.log(result);
// console.log(result2);


// let weather = 'rain';
// weather = 'wind';



function whatToDo(weather) {
    if (weather) {
        switch (weather) {
            case 'sunny':
                return 'walking';
            case 'snow':
                return 'take a snowboard';
            case 'wind':
                return 'lets go kiting';
            case 'rain':
                return 'going by car';
            default:
                return 'weather is not defined';
        }
    } else {
        return 'unknown data';
    }
}

console.log(whatToDo('snow'));
console.log(whatToDo('wind'));
console.log(whatToDo('something'));


let person = {
    name: "John",
    age: 35,
};

// let me = 'Andrey';
// run(me);

let person2 = {
    name: "Sofia",
    age: 0,
};

// let result = (person2.age) ? person2.age : 'data error';
// console.log(result);


function  checkAge (object) {
    if (!object.age) {
        return;
    }
    if (object.age >= 18 && object.age <= 55) {
        if (object.age === 25) {
            return 'quarter of a century';
        } else {
            return 'adult';
        }
    } else {
        return 'another age';
    };
}

console.log(checkAge(person));
console.log(checkAge(person2));
console.log(checkAge({name: 'Bob', age: 25}));

// function func(param) {
//     param();
// }
//
// func(function () {
//     alert(3);
// });