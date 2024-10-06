'use strict';

let loader = $('.loader');
let form = $('.order__form');
let order = $('.order__plus');

$('#submit_order').click(function () {
    let product = $('#product');
    let name = $('#name');
    let phone = $('#phone');
    let hasError = false;


    $('.error-input').hide();

    if (!product.val()) {
        product.next().show();
        hasError = true;
    }
    if (!name.val()) {
        name.next().show();
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        hasError = true;
    }
    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "http://testologia.ru/checkout",
            data: { product: product.val(), name: name.val(), phone: phone.val() }
        })
            .done(function(msg) {
                loader.hide();
                if (msg.success) {
                    form.hide();
                    order.show();
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
                }
                console.log(msg);
            });
    }
})