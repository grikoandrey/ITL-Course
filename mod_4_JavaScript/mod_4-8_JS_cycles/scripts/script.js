// let array = [1, 5, 3, 6, 2, 8, 9];
// let sum = 0;
// let obj = {
//     name: "John",
//     age: 45,
//     country: 'USA',
// }

// for (let i = 0; i < array.length; i++) {
// for (let i in array) {
//         if (array[i] > 5) {
//             // break;
//             continue;
//         }
//         console.log(array[i]);
//         sum += array[i];
// }
// console.log(`sum: ${sum}`);

// for (let i in obj) {
//     console.log(obj[i]);
// }
// for (let el of array) {
//     console.log(el);
// }

// array.forEach(function (el) {
//     // if (el === 6) {
//     //     return;
//     // }
//     console.log(el);
// });

// let num = 35;
// let i = 0;

// while (num % 100 !== 0) {
//     num += 35;
//     i++;
// }
// do {
//     num += 35;
// } while (num < 150)
//
// console.log(num);
// console.log(i);

let meals = [
    {
        name: "Борщ",
        weight: 500,
        kcal: 580,
    },
    {
        name: "Блины с творогом",
        weight: 50,
        kcal: 112,
    },
    {
        name: "Плов",
        weight: 100,
        kcal: 359,
    },
    {
        name: "Печень",
        weight: 100,
        kcal: 205,
    },
    {
        name: "Салат мясной",
        weight: 100,
        kcal: 385,
    },
    {
        name: "Каша гречневая",
        weight: 80,
        kcal: 151,
    },
    {
        name: "Картофель отварной",
        weight: 30,
        kcal: 28,
    },
    {
        name: "Яйца вареные",
        weight: 10,
        kcal: 12.6,
    },
];


function checkArray (array) {
    for (let i = 0; i < array.length; i++) {
        // let kcalPer100Grams = calculateKcalPer100Grams(array[i].weight, array[i].kcal);
        array[i].kcalPer100Grams = calculateKcalPer100Grams(array[i].weight, array[i].kcal);
        if (array[i].kcalPer100Grams > 300) {
            showMealInfo(array[i]);
        }
    }
}


function showMealInfo(element) {
    console.log(`блюдо "${element.name}" весом ${element.weight} имеет ценность ${element.kcal} ккал`);
    console.log(`блюдо "${element.name}" имеет ценность ${element.kcalPer100Grams} ккал на 100 грамм`);
}

function calculateKcalPer100Grams(grams, kcal) {
    return Math.round(kcal/grams * 100);
}

checkArray(meals);
// res = calculateKcalPer100Grams(meals[0].weight, meals[0].kcal);
// console.log(res);