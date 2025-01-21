$('h1').html('Самая крутая пицца ждет <span>только в нашем ресторане</span>');

// document.getElementById('products-title').style.color = '#000000';
$('#products-title').css('color', '#000000');

let productInput = $('#product-input');
productInput.attr('placeholder', 'Выберите пиццу');

$('.rights span').text((new Date()).getFullYear());

//плавное перемещение на заданный раздел при клике на кнопку
$('#choose-pizza').click(function () {
    $('.products')[0].scrollIntoView({behavior: "smooth"});
});
//заполнение поля формы определенным названием и перемещение к блоку
$('.btn-add-to-card').click((e) => {
    productInput.val($(e.target).parents('.product').find('h6').text());
    $('.order')[0].scrollIntoView({behavior: "smooth"});
})

$('#createOrder').click(function () {

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
