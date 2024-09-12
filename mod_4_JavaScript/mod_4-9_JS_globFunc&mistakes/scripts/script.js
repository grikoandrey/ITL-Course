// let result = confirm('Hello World!');
// let result = prompt('How old are you?');

// let a = parseInt('5.7a')
// let b = parseFloat('5.6a')

// console.log(result);
// console.log(a);
// console.log(b);

// let num = 1;

// let interval = setInterval(function () {
//     if (num === 7) {
//         clearInterval(interval);
//     }
//     console.log(num++);
// }, 1000);

// setTimeout(function () {
//     console.log(num);
// }, 3000);
//
// console.log(num);

// let date = new Date('2000-03-11');
// console.log(date);
//
//
// let year = date.getFullYear();
// console.log(year);
//
// date.setDate(24);
// console.log(date);

// let a;
// if (1 > 2) {
//     b = 5;
// }
//
// console.log(a);

// const a = 1;
// a = 2;

// setTimeout(() => {
//     console.log(1);
// }, 1000);

//function
// let a = (param) => {
//     console.log(param);
// };
//
// a(23);


//errors
// console.log(a);
// alert(1);

// try {
//     console.log(a);
// } catch(e) {
//     console.log(e);
// }
// alert('Opa!');

let meals = `[
    {
        "name": "Борщ",
        "weight": 500,
        "kcal": 580
    },
    {
        "name": "Блины с творогом",
        "weight": 50,
        "kcal": 112
    },
    {
        "name": "Плов"
    },
    {
        "name": "Печень",
        "weight": 100,
        "kcal": 205
    },
    {
        "name": "Салат мясной",
        "weight": 100,
        "kcal": 385
    },
    {
        "name": "Каша гречневая",
        "weight": 80,
        "kcal": 151
    },
    {
        "name": "Картофель отварной",
        "weight": 30,
        "kcal": 28
    },
    {
        "name": "Яйца вареные",
        "weight": 10,
        "kcal": 12.6
    }
]`;

function checkArrays(json) {
    let array = [];
    try {
        array = JSON.parse(json);
    } catch (e) {
        console.log(`input data error: ${e.message} `);
        // return;
    }

    for (let i = 0; i < array.length; i++) {
        try {
            array[i].kcalPer100Grams = calculateKcalPer100Grams(array[i].weight, array[i].kcal);
        } catch (e) {
            array[i].kcalPer100Grams = null;
        }

        // if (array[i].kcalPer100Grams > 300) {
        showMealInfo(array[i]);
        // }
    }
}

function showMealInfo(element) {
    // console.log(`блюдо "${element.name}" весом ${element.weight} имеет ценность ${element.kcal} ккал`);
    console.log(`блюдо "${element.name}" ${element.kcalPer100Grams ?
        'имеет ценность ${element.kcalPer100Grams} ккал на 100 грамм' :
        'данные отсутствуют'}`);
}

function calculateKcalPer100Grams(grams, kcal) {
    if (!kcal || !grams) {
        throw new Error('data is not OK!')
    }
    return Math.round(kcal / grams * 100);
}

checkArrays(meals);

console.log('That`s ok');