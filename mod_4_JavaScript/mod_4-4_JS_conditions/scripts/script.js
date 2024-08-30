// let weather = 'rain';
// if (weather === 'sunny') {
//     way = 'walking';
// } else if (weather === 'snow') {
//     way = 'take a snowboard';
// } else if (weather === 'wind') {
//     way = 'lets go kiting';
// } else {
//     way = 'going by car'
// }
// console.log(way);

// let person = {
//     name: "John",
//     age: 34,
// };

// let person2 = {
//     name: "Sofia",
//     age: '',
// };
// if (person.age >= 18 && person.age <= 55) {
//     console.log('adult')
//     if (person.age === 25) {
//         console.log('quarter of a century')
//     } else {
//         console.log('another age')
//     }
// }
// if (person.age) {
//     console.log('age ok');
// }
// if (!person2.age) {
//     console.log('data error');
// }
// let result = (person2.age) ? person2.age : 'data error';
// console.log(result);


// в weather попадают данные о погоде с другого сервиса -------------
let weather = 'rain';
weather = 'wind';


if (weather) {
    switch (weather) {
        case 'sunny':
            way = 'walking';
            break;
        case 'snow':
            way = 'take a snowboard';
            break;
        case 'wind':
            way = 'lets go kiting';
            break;
        default:
            way = 'going by car';
            break;
    }
    console.log(way);
} else {
    console.log('unknown data');
}
