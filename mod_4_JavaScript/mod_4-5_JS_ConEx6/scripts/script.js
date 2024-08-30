//--------------------------part-1----------------------------------
//---comments: в задании и в обучении сказано применение 'var' для создания переменных, но IDE выдает замечание о
// том, что надо использовать 'let' или 'const', поэтому я принял такое решение осознанно. Так же первая часть
// выводится в консоль, вторая в сообщения пользователю.
let mercedes = {
    name: 'Mercedes',
    model: 'GL450',
    engine: 4.0,
    year: 2015,
    color: 'black',
    hp: 300,
    forSale: true,
}

let bmw = {
    name: 'BMW',
    model: 'X6',
    engine: 3.0,
    year: 2018,
    color: 'white',
    hp: 313,
    forSale: false,
}

let audi = {
    name: 'Audi',
    model: 'Q7',
    engine: 3.0,
    year: 2021,
    color: 'blue',
    hp: 249,
    forSale: true,
}

let year = new Date().getFullYear();

mercedes.carAge = year - mercedes.year
bmw.carAge = year - bmw.year
audi.carAge = year - audi.year

let carAges = (`Mercedes: ${mercedes.carAge} ${mercedes.carAge < 5 ? 'года' : 'лет'}, 
                       BMW: ${bmw.carAge} ${bmw.carAge < 5 ? 'года' : 'лет'}, 
                       Audi: ${audi.carAge} ${audi.carAge < 5 ? 'года' : 'лет'}`);
// let names = mercedes.name + ' ' + mercedes.model + ', ' + bmw.name + ' ' + bmw.model + ', ' + audi.name + ' ' + audi.model
let names = `${mercedes.name} ${mercedes.model}, ${bmw.name} ${bmw.model}, ${audi.name} ${audi.model}`;
let averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3
let atLeastOneForSale = mercedes.forSale || bmw.forSale || audi.forSale ? 'да' : 'нет';
let allYoungerThanFive = mercedes.carAge < 5 && bmw.carAge < 5 && audi.carAge < 5 ? 'да' : 'нет';
let atLeastOneHasLittleHp = mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250 ? 'да' : 'нет';
//----------------------output of results---------------------------
console.log('Возраст автомобилей - ', carAges);
console.log('Марка и модель всех авто - ', names);
console.log('Средний возраст автомобилей - ', averageAge, 'лет');
console.log('Хотя бы один автомобиль продаётся? - ', atLeastOneForSale);
console.log('Все авто младше 5 лет? - ', allYoungerThanFive);
console.log('Хоть один автомобиль имеет менее 250 лошадиных сил? - ', atLeastOneHasLittleHp);
//--------------------------part-2----------------------------------
let car = mercedes;
if (car === mercedes || car === bmw || car === audi)
{
    if (car.name === 'Mercedes' && car.model === 'GL450') {
        alert(`Обожаю свой Мерседес! ${car.name} ${car.model}`);
    } else {
        alert(`Это ${car.name} ${car.model}`);
    }
    if (car.carAge === 0) {
        alert(`Новый автомобиль`);
    } else if (car.carAge <= 3) {
        alert(`Свежий автомобиль`);
    } else {
        alert(`Этому автомобилю ${car.carAge} ${car.carAge < 5 ? 'года' : 'лет'}`);
    }
    let consumption = car.engine > 3.0 ? 'Прожорливый автомобиль' : 'Экономичный автомобиль';
    alert(consumption);

    let russianColor;
    switch (car.color) {
        case 'black':
            russianColor = 'черный';
            break;
        case 'silver':
            russianColor = 'серебристый';
            break;
        case 'red':
            russianColor = 'красный';
            break;
        case 'white':
            russianColor = 'белый';
            break;
        case 'gray':
            russianColor = 'серый';
            break;
        case 'blue':
            russianColor = 'синий';
            break;
        default:
            russianColor = 'Невозможно определить цвет автомобиля';
            break;
    }
    alert(russianColor);
} else {
    alert ('Данные не найдены. Уточните наименование автомобиля и тип ввода данных.')
}

