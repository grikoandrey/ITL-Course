document.getElementsByTagName('h1')[0].innerHTML = 'Самая крутая пицца ждет ' +
    '<span>только в нашем ресторане</span>';

document.getElementById('products-title').style.color = '#000000';

let buttonElements = document.querySelectorAll('.btn');

buttonElements.forEach((item) => {
    if (item.innerText === 'Оформить заказ' || item.id === 'no-touch') {
        return;
    }
    item.style.backgroundColor = 'transparent';
    item.style.border = '1px solid rgb(255, 175, 24)';
    item.style.color = 'rgb(255, 175, 24)';
})

// for (let i = 0; i < buttonElements.length; i++) {
//     if (buttonElements[i].innerText === 'Оформить заказ' || buttonElements[i].id === 'no-touch') {
//         continue
//     }
//     buttonElements[i].style.backgroundColor = 'transparent';
//     buttonElements[i].style.border = '1px solid rgb(255, 175, 24)';
//     buttonElements[i].style.color = 'rgb(255, 175, 24)';
// }

document.getElementById('name-input').placeholder = 'Your name';

document.querySelector('.rights span').innerText = (new Date()).getFullYear();

let products = document.getElementsByClassName('product');
for (let i = 0; i < products.length; i++) {
    if (i % 2 === 1) {
        products[i].querySelector('.product-info h6').innerText += '*';
    }
}