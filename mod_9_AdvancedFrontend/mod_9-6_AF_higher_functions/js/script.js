// let items = [1, 2, 3, 4, 5, 6, 7, 8];

// function Sum(array, callback) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     callback(sum);
// }
//--------------------------
// function Sum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return function (text) {
//         console.log(`${text}: ${sum}`);
//     }
// }
// let myFunc = Sum(items);
// myFunc('получили сумму');

// Sum(items)('получили сумму');
//-------------------------------------------------
// Sum(items, function(sum) {
//     console.log(`получили сумму: ${sum}`);
// });
//-------------------------------------------------
// function display(sum) {
//     console.log(`получили сумму: ${sum}`);
// }
// Sum(items, display);
//-------------------------------------------------
//-----------------Деструктуризация----------------
// let a = 1;
// let b = 2;
// let c;
// let [roma, , oleg] = ['Roman', 'Alex', 'Oleg'];
// [a, , , b, c] = 'abcdefghijklmnopqrst';
// console.log(roma);
// console.log(oleg);
// console.log(a);
// console.log(b);
// console.log(c);
//-----------------
// let obj = {};
// [obj.name, obj.age = 20, ...params] = ['Igor', 37, 'Geneva', 'Rue Lamartine 16'];
// console.log(obj);
// console.log(params);
//-----------------
// let obj2 = {
//     name: 'Alex',
//     lastName: 'Borisov',
//     age: 33,
//     city: 'Moscow',
//     job: 'VIS',
//     info: {
//         sex: 'male',
//         status: 'director',
//     },
//
// }
// const {name: n, lastName: f, age: v = 25, info: {status}, ...rest} = obj2;
// console.log(n);
// console.log(f);
// console.log(v);
// console.log(status);
// console.log(rest);
//---------------------------
// function processPerson({name, info:{status}}) {
//     console.log(name, status);
// }
// processPerson(obj2);
//---------------------------
// function getPerson() {
//     let obj3 = {
//         someData: 31,
//     }
//     // return ['Alex', 'Platonov', obj3];
//     return {name: 'Alex', lastName: 'Platonov', objN: obj3};
// }
// // let [name, lastName, age] = getPerson();
// let {objN, name} = getPerson();
// // console.log(name, lastName, age);
// console.log(objN, name);
//--------------DATA--------------
let brands = [];
let types = [];
let products = [];

Promise.all(
    [
        fetch('data/brands.json'),
        fetch('data/types.json'),
        fetch('data/products.json'),
    ]
).then(async ([brandsResponse, typesResponse, productsResponse]) => {
    const brandsJson = await brandsResponse.json();
    const typesJson = await typesResponse.json();
    const productsJson = await productsResponse.json();
    return [brandsJson, typesJson, productsJson];
}).then (response => {
    brands = response[0];
    types = response[1];
    products = response[2];

    processData();
})

function processData() {
    // console.log(brands);
    // console.log(types);
    // console.log(products);
    // let result = products.some((product-card) => {
    //     return product-card.price > 20000;
    // })
    // let result = products.every((product-card) => {
    //     return product-card.title.includes('Пылесос');
    // })
    // let result = products.find((product-card) => {
    //     return product-card.title.indexOf('BCS611') > -1;
    // })
    // let result = products.findIndex((product-card) => {
    //     return product-card.title.indexOf('BCS611') > -1;
    // })
    // products.forEach(product-card => console.log(product-card));
    // let result = products.filter((product-card) => {
    //     return product-card.price >= 8000 && product-card.price <= 10000;
    // })
    // let result = products.sort((a, b) => {
    //     return a.price - b.price;
    // })
    // let result = products.map((product-card) => {
    //     return {
    //         title: product-card.title,
    //         equipment: product-card.equipment,
    //     };
    // // })
    // let result = products.reduce((sum, product-card) => {
    //     return sum + product-card.price;
    // }, 0)
    //--------------------------------------task#1
    // let samsung = brands.find(brand => brand.title.toLowerCase() === 'samsung');
    // // console.log(samsung);
    // if (samsung) {
    //     let result = products.filter(product-card => product-card.brandId === samsung.id)
    //     console.log(result);
    // }
    //--------------------------------------task#2
    // let result = products.map(product-card => {
    //     let brand = brands.find(brand => brand.id === product-card.brandId);
    //     if (brand && brand.title) {
    //         product-card.brand = brand.title;
    //     }
    //     delete product-card.brandId;
    //     let type = types.find(type => type.id === product-card.typeId);
    //     if (type && type.name) {
    //         product-card.type = type.name;
    //     }
    //     delete product-card.typeId;
    //     return product-card;
    // });
    // console.log(result);
    //--------------------------------------task#3-------заменить на метод reduce---------!!!!!!!!
    // let result = products.map(product-card => {
    //     let sum = 0;
    //     product-card.reviews.forEach(review => {
    //         sum += review.stars;
    //     })
    //     return {
    //         title: product-card.title,
    //         rating: +(sum / product-card.reviews.length).toFixed(1),
    //     }
    // });
    // console.log(result);
    //--------------------------------------task#4
    // let maxPower = 0;
    // let maxPowerItem = null;
    // products.forEach(product-card => {
    //     let allChar = product-card.characteristics.find(category => {
    //         return category.name.toLowerCase() === 'основные'
    //     });
    //     if (allChar && allChar.value) {
    //         let power = allChar.value.find(char => {
    //             return char.name.toLowerCase() === 'мощность'
    //         });
    //         if (power && power.value) {
    //             let powerNum = parseInt(power.value);
    //             if (!isNaN(powerNum) && powerNum > maxPower) {
    //                 maxPower = powerNum;
    //                 maxPowerItem = product-card;
    //             }
    //         }
    //     }
    // });
    // console.log(maxPower);
    // console.log(maxPowerItem);
    //--------------------------------------task#5
    // let result = products.find(product-card => {
    //     // product-card.find(item => product-card.reviews.findIndex(review => review.person === 'Константин Хабенский') > -1);
    //     let index =  product-card.reviews.findIndex(review => {
    //         return review.person === 'Константин Хабенский'
    //     });
    //     return index > -1;
    // });
    // console.log(result);
    //--------------------------------------task#6-найти все отзывы с 01.01.2022 года
    let reviews = [];
    products.forEach(product => {
        let itemReviews = product.reviews.filter(review => {
            let dateParts = review.date.split('.');
            let reviewDate = new Date(dateParts.reverse());
            // let reviewDate = new Date(+dateParts[2], +dateParts[1], +dateParts[0]);
            // console.log(reviewDate);
            return reviewDate > new Date(2022, 0, 1);
            // return reviewDate > new Date(2022, 1, 1);
        })
        reviews.push(...itemReviews);
        // reviews = reviews.flat();
    })
    console.log(reviews);
}