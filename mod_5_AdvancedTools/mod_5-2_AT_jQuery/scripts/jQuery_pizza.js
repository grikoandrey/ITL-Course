$('h1').html('Самая крутая пицца ждет <span>только в нашем ресторане</span>');

// document.getElementById('products-title').style.color = '#000000';
$('#products-title').css('color', '#000000');

//добавление и изменение стилей в элемент
// $('.btn:not(#no-touch)').css({
//     backgroundColor: 'transparent',
//     border: '1px solid rgb(255, 175, 24)',
//     color: 'rgb(255, 175, 24)',
// })

// let buttonElements = document.querySelectorAll('.btn');
//
// buttonElements.forEach((item) => {
//     if (item.innerText === 'Оформить заказ' || item.id === 'no-touch') {
//         return;
//     }
//     item.style.backgroundColor = 'transparent';
//     item.style.border = '1px solid rgb(255, 175, 24)';
//     item.style.color = 'rgb(255, 175, 24)';
// })

// for (let i = 0; i < buttonElements.length; i++) {
//     if (buttonElements[i].innerText === 'Оформить заказ' || buttonElements[i].id === 'no-touch') {
//         continue
//     }
//     buttonElements[i].style.backgroundColor = 'transparent';
//     buttonElements[i].style.border = '1px solid rgb(255, 175, 24)';
//     buttonElements[i].style.color = 'rgb(255, 175, 24)';
// }
let productInput = $('#product-input');
productInput.attr('placeholder', 'Your name');

$('.rights span').text((new Date()).getFullYear());

//поиск элемента в массиве и добавление к нему символа *
// let products = $('.product');
// for (let i = 0; i < products.length; i++) {
//     if (i % 2 === 1) {
//         // products[i].querySelector('.product-info h6').innerText += '*';
//         let element = products.eq(i).find('h6');
//         element.text(element.text() + '*');
//     }
// }

//плавное перемещение на заданный раздел при клике на кнопку
$('#choose-pizza').click(function () {
    $('.products')[0].scrollIntoView({behavior: "smooth"});
});
//заполнение поля формы определенным названием и перемещение к блоку
$('.btn-add-to-card').click((e) => {
    productInput.val($(e.target).parents('.product').find('h6').text());
    $('.order')[0].scrollIntoView({behavior: "smooth"});
})

//как бы удалили данную функцию в рамках урока 9-2, чтобы написать заново с ошибками
// // проверка заполнения полей формы (выводится уведомление) и отправляется запрос на сайт
// $('#createOrder').click(function (){
//     let addressInput = $('#address-input');
//     let phoneInput = $('#phone-input');
//     if (!productInput.val()) {
//         alert('Выберите пиццу!');
//         return;
//     }
//     if (!addressInput.val()) {
//         alert('Введите адрес!');
//         return;
//     }
//     if (!phoneInput.val()) {
//         alert('Введите телефон!');
//         return;
//     }
//     $.ajax( {
//         method: 'GET',
//         url: `https://testologia.ru/test-cookie?name=${productInput.value}`,
//         xhrFields: {
//             withCredentials: true,
//         }
//     })
//
//     // alert('Спасибо за заказ!');
//     // productInput.val('');
//     // addressInput.val('');
//     // phoneInput.val('');
// });

$('#createOrder').click(function () {
    // debugger;
    // console.log(1);
    // console.warn(1);
    // console.error(1);
    // console.trace();
    // console.debug('something');

    let hasError = false;
    let addressInput = $('#address-input');
    let phoneInput = $('#phone-input');

    $('.order-input').css('border-color', 'rgb(185, 145, 80)');
// в рамках урока 9-3 Регулярные выражения добавили валидацию через выражения
    if (!productInput.val().match(/^[А-Я][а-я]+\s*$/)) {
        productInput.css('border-color', 'red');
        hasError = true;
    }

    if (!addressInput.val().match(/^[а-я0-9,\.\s]+$/i)) {
        addressInput.css('border-color', 'red');
        hasError = true;
    }

    if (!phoneInput.val().match(/^[0-9\(\)\-\s]+$/)) {
        // if (!phoneInput.val().match(/^\+7\s\(9\d{2}\)\s\d{3}-\d{2}-\d{2}$/)) {
        phoneInput.css('border-color', 'red');
        hasError = true;
    }

    if (!hasError) {
        // console.time('ajax');
        $.ajax({
            method: 'POST',
            url: `https://testologia.ru/checkout`,
            data: {
                product: productInput.val(),
                name: addressInput.val(),
                phone: phoneInput.val(),
            }
        })
            .done(function (msg) {
                // console.timeEnd('ajax');
                if (msg.success) {
                    alert('Спасибо за заказ!');
                } else {
                    alert('Ошибка, попробуйте позднее!');
                }
            })
    }
})

// дополнительное упражнение в рамках модуля 9-3 для замены слова с помощью регулярных выражений
let products = $('.product');
for (let i = 0; i < products.length; i++) {
    let productTitle = products.eq(i).find('h6');
    productTitle.text(productTitle.text().replace(/(Курин[а-я]+)(.+)/gi, '$2 из индейки'));
}