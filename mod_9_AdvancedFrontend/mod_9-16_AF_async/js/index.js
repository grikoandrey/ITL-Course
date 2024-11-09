// let a = 1;
//
// setTimeout( () => {
//     a = 2;
// }, 0)
//
// console.log(a);

// $.ajax({
//     dataType: "json",
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
//     success: (result) => {
//         console.log(result);
//         $.ajax({
//             dataType: "json",
//             url: `https://jsonplaceholder.typicode.com/todos/${result.id + 1}`,
//             success: (result) => {
//                 console.log(result);
//                 $.ajax({
//                     dataType: "json",
//                     url: `https://jsonplaceholder.typicode.com/todos/${result.id + 1}`,
//                     success: (result) => {
//                         console.log(result);
//                     }
//                 })
//             }
//         })
//     }
// })

// console.log(1);

function getJsonData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject('no url provided');
        }
        $.ajax({
            dataType: "json",
            url: url,
            success: (result) => {
                resolve(result);
            },
            error: () => {
                reject('request error');
            }
        })
    })
}

async function startJson() {
    try {
        const json1 =  await getJsonData(`https://jsonplaceholder.typicode.com/todos/1`);
        console.log(json1);
        const json2 =  await getJsonData(`https://jsonplaceholder.typicode.com/todos/${json1.id + 1}`);
        console.log(json2);
        const json3 =  await getJsonData(`https://jsonplaceholder.typicode.com/todos/${json2.id + 1}`);
        console.log(json3);
    } catch (e) {
        console.log(e)
    }
}

startJson();

// getJsonData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(json => {
//         console.log(json);
//         return getJsonData(`https://jsonplaceholder.typicode.com/todos/${json.id + 1}`);
//     })
//     .then(json => {
//         console.log(json);
//         return getJsonData(`https://jsonplaceholder.typicode.com/todos/${json.id + 1}`);
//     })
//     .then(json => {
//         console.log(json);
//     })

// Promise.all([
//     getJsonData('https://jsonplaceholder.typicode.com/todos/1'),
//     getJsonData('https://jsonplaceholder.typicode.com/todos/2'),
//     getJsonData('https://jsonplaceholder.typicode.com/todos/3'),
// ])
//     .then(json => {
//         console.log(json);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// let result = fetch('https://jsonplaceholder.typicode.com/todos/1');
// result.then(response => {
//     const resp = response.json();
//     // console.log(response)
//     // console.log(resp);
//     return resp;
// })
//     .then((json) => {
//         console.log(json);
//     });

// console.log(result);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .catch(error => console.log(error))
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         throw new Error('message');
//         return fetch(`https://jsonplaceholder.typicode.com/todos/${json.id + 1}`);
//     })
//     // .catch(error => console.log(error))
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         return fetch(`https://jsonplaceholder.typicode.com/todos/${json.id + 1}`);
//     })
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//     })
//     .catch(error => console.log(error))

// function getSomeData(param) {
//     return new Promise((resolve, reject) => {
//         if (param === 1) {
//             resolve('Успешный результат!');
//         } else {
//             reject(`Не успех...`)
//         }
//     })
// }
//  getSomeData(2)
//      .then(string => console.log(string))
//      .catch(error => console.log(error))


// console.log(promise)