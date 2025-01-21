$(document).ready(function () {

    let productInputName = $('#product-input');
    productInputName.attr('placeholder', 'Выберите пиццу');

    $('.rights span').text((new Date()).getFullYear());

//плавное перемещение на заданный раздел при клике на кнопку
    $('#choose-pizza').click(function () {
        $('.products')[0].scrollIntoView({behavior: "smooth"});
    });
//заполнение поля формы определенным названием и перемещение к блоку
    $('.btn-add-to-card').click((e) => {
        productInputName.val($(e.target).parents('.product').find('h6').text());
        $('.order')[0].scrollIntoView({behavior: "smooth"});
    })

    $('#createOrder').click(function () {

        let hasError = false;
        let addressInput = $('#address-input');
        let phoneInput = $('#phone-input');

        $('.order-input').css('border-color', 'rgb(185, 145, 80)');
        if (!productInputName.val().match(/^[А-Я][а-я]+\s*$/)) {
            productInputName.css('border-color', 'red');
            hasError = true;
        }

        if (!addressInput.val().match(/^[а-я0-9,.\s]+$/i)) {
            addressInput.css('border-color', 'red');
            hasError = true;
        }

        if (!phoneInput.val().match(/^[0-9()\-\s]+$/)) {
            phoneInput.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                method: 'POST',
                url: `https://testologia.ru/checkout`,
                data: {
                    product: productInputName.val(),
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
});