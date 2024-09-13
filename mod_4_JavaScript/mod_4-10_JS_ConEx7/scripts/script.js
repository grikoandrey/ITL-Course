let clients= [
    {
        firstName : 'Александр',
        lastName: 'Иванчук',
        date: '11-29-1990',
        phone: '8(929)988-90-09',
        amounts: [2546, 2098,764, 7266],
    },
    {
        firstName : 'Анатолий',
        lastName: 'Стаценко',
        date: '02-12-1987',
        phone: null,
        amounts: [563, 8287, 889],
    },
    {
        firstName : 'Марина',
        lastName: 'Петрова',
        date: '07-26-1997',
        phone: '8(899)546-09-08',
        amounts: [6525, 837, 1283, 39],
    },
    {
        firstName : 'Иван',
        lastName: 'Караванов',
        date: '09-12-1999',
        phone: null,
        amounts: [7634, 283, 9823, 3902],
    },
    {
        firstName : 'Оксана',
        lastName: 'Абрамова',
        date: '01-24-2002',
        phone: '8(952)746-99-22',
        amounts: [342, 766, 3622],
    },
];

//-------------exercise 9--------------
let bestClients= [
    {
        firstName : 'Петр',
        lastName: 'Куницкий',
        date: '06-15-1980',
        phone: '8(923)945-34-27',
        amounts: [2146, 1098, 394],
    },
    {
        firstName : 'Ефрем',
        lastName: 'Амирамов',
        date: '04-22-1977',
        phone: null,
        amounts: [1563, 4287, 1289],
    },
    {
        firstName : 'Екатерина',
        lastName: 'Дронова',
        date: '10-16-2001',
        phone: '8(832)385-56-18',
        amounts: [3525, 2837, 283, 139],
    },
];
//-------------part 1------------------
//-------------exercise 1--------------
let newClient = {};
//-------------exercise 2--------------
newClient.firstName = prompt('Enter your first name:');
newClient.lastName = prompt('Enter your last name:');
newClient.date = prompt('Enter your birthday (mm-dd-yyyy):');
newClient.phone = prompt('Enter your phone (8(XXX)XXX-XX-XX:');
//-------------exercise 3--------------
newClient.amounts = [];
//-------------exercise 4--------------
let amount;
while ((amount = prompt(`Добавить покупку для клиента ${newClient.firstName}?`)) !== null && amount !== '') {
    newClient.amounts.push(Number(amount));
}

// console.log(newClient);
//-------------exercise 5--------------
clients.push(newClient);
console.log(clients);

//-------------part 2------------------
//-------------exercise 1--------------
function fullName(obj) {
    return `${obj.firstName} ${obj.lastName}`;
}
// console.log(fullName(clients[0]));
//-------------exercise 2--------------
function getBirthday(el) {
    let date = new Date(el);
    let today = new Date();
    // console.log(date);
    // console.log(today);
    if (today.getFullYear() === date.getFullYear() &&
        today.getMonth() === date.getMonth() &&
        today.getDate() === date.getDate()) {
        return `${toLocalString(date)} (сегодня)`;
    } else {
        return toLocalString(date);
    }
}

function toLocalString(date) {
    let monthName;
    switch(date.getMonth()) {
        case 0: monthName = 'января'; break;
        case 1: monthName = 'февраля'; break;
        case 2: monthName = 'марта'; break;
        case 3: monthName = 'апреля'; break;
        case 4: monthName = 'мая'; break;
        case 5: monthName = 'июня'; break;
        case 6: monthName = 'июля'; break;
        case 7: monthName = 'августа'; break;
        case 8: monthName = 'сентября'; break;
        case 9: monthName = 'октября'; break;
        case 10: monthName = 'ноября'; break;
        case 11: monthName = 'декабря'; break;
    }
    return `${date.getDate()} ${monthName}`;
}
// console.log(getBirthday(clients[0].date));
//-------------exercise 3--------------
function getAllAmount(param) {
    let sum = 0;
    param.forEach((elem) => {
        sum += elem;
    })
    return sum;
}
// console.log(getAllAmount(clients[0].amounts));
//-------------exercise 4--------------
function getAverageAmount(param) {
    let average = getAllAmount(param);
    return (average / param.length).toFixed(1);
}
//-------------exercise 5--------------
// console.log(getAverageAmount(clients[0].amounts));
//-------------exercise 6--------------
showClients = (array) => {
    let results = [];
    array.forEach((elem) => {
        let res = `Клиент ${fullName(elem)} имеет среднюю сумму чека ${getAverageAmount(elem.amounts)}. День рождения клиента: ${getBirthday(elem.date)}`;
        console.log(res);
        results.push(res);
    })
    return results;
}
//-------------exercise 7--------------
showClients(clients);
//-------------exercise 8--------------
// try {
//     showClients();
// } catch (err) {
//     console.log('Вызвана функция без параметров');
//     console.log(err);
// }
//-------------exercise 10--------------
setTimeout(() => { showClients(bestClients); }, 4000);

//-------------exercise 11--------------
function whoSpentMore(array) {
    let maxSpent = 0;  // Переменная для хранения максимальной суммы
    let maxClient = null;  // Переменная для хранения клиента с наибольшей суммой

    for (let i = 0; i < array.length; i++) {
        let res = getAllAmount(array[i].amounts)
        if (res > maxSpent) {
            maxSpent = res;  // Обновляем максимальную сумму
            maxClient = fullName(array[i]);  // Сохраняем клиента с максимальной суммой
        }
    }
    console.log(`Больше всех потратил ${maxClient}. Сумма покупок: ${maxSpent}`);
    return maxClient;  // Возвращаем клиента с наибольшей суммой
}
//-------------exercise 12--------------
setTimeout(() => { whoSpentMore(clients); }, 2000);
setTimeout(() => { whoSpentMore(bestClients); }, 6000);