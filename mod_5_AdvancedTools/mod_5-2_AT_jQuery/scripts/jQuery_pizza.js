$('h1').html('Самая крутая пицца ждет <span>только в нашем ресторане</span>');

// document.getElementById('products-title').style.color = '#000000';
$('#products-title').css('color', '#000000');

$('.btn:not(#no-touch)').css({
    backgroundColor: 'transparent',
    border: '1px solid rgb(255, 175, 24)',
    color: 'rgb(255, 175, 24)',
})

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

let products = $('.product');
for (let i = 0; i < products.length; i++) {
    if (i % 2 === 1) {
        // products[i].querySelector('.product-info h6').innerText += '*';
        let element = products.eq(i).find('h6');
        element.text(element.text() + '*');
    }
}

$('#choose-pizza').click(function (){
    $('.products')[0].scrollIntoView({behavior: "smooth" });
});

$('.btn-add-to-card').click((e) => {
    productInput.val($(e.target).parents('.product').find('h6').text());
    $('.order')[0].scrollIntoView({behavior: "smooth" });
})

$('#createOrder').click(function (){
    let addressInput = $('#address-input');
    let phoneInput = $('#phone-input');
    if (!productInput.val()) {
        alert('Выберите пиццу!');
        return;
    }
    if (!addressInput.val()) {
        alert('Введите адрес!');
        return;
    }
    if (!phoneInput.val()) {
        alert('Введите телефон!');
        return;
    }
    $.ajax( {
        method: 'GET',
        url: `https://testologia.ru/test-cookie?name=${productInput.value}`,
        xhrFields: {
            withCredentials: true,
        }
    })

    // alert('Спасибо за заказ!');
    // productInput.val('');
    // addressInput.val('');
    // phoneInput.val('');
});