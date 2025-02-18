'use strict';

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//     // 'use strict'
//
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
//
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
//
//         form.classList.add('was-validated')
//       }, false)
//     })
//
//     function calcTotal () {
//         let total = 0;
//         $('.list-group .product-card-price').each(function() {
//             let price = parseFloat($(this).text().replace('$', ''));
//             total += price;
//             // console.log(price)
//
//         })
//         // console.log(total);
//         $('#total-price').text('$' + total.toFixed(0));
//         return total;
//     }
//
//     let loader = $('.loader');
//
//     $('#redeem').click(function () {
//         // calcTotal();
//         let promoInput = $('#promo-code');
//         let url = `http://testologia.ru/promo-code?name=${promoInput.val()}`;
//         loader.css('display', 'flex');
//         // console.log(url);
//
//         // let http = new XMLHttpRequest();
//         // http.open('get', url);
//         // http.send();
//         promoInput.css('border-color', 'black');
//
//         // http.onreadystatechange = () => {
//         //     if (http.readyState === 4 && http.status === 200) {
//         //         let result;
//         //         try {
//         //             result = JSON.parse(http.responseText);
//         //         } catch (e) {}
//         //         let promoElement = $('#promocode');
//         //         if (result && result.hasOwnProperty('amount')) {
//         //             promoElement.removeClass('d-none').addClass('d-flex');
//         //             promoElement.find('small').text(promoInput.val().toUpperCase());
//         //             promoElement.find('span.text-success').text(`-$${result.amount}`);
//         //         } else {
//         //             promoElement.removeClass('d-flex').addClass('d-none');
//         //             promoInput.src('border-color', 'red');
//         //         }
//         //         // console.log(result);
//         //     }
//         // }
//
//         $.ajax({
//             method: "GET",
//             url: url,
//         })
//             .done(function( message ) {
//                 loader.hide();
//                 let promoElement = $('#promocode');
//                 if (message && message.hasOwnProperty('amount')) {
//                     promoElement.removeClass('d-none').addClass('d-flex');
//                     promoElement.find('small').text(promoInput.val().toUpperCase());
//                     promoElement.find('span.text-success').text(`-$${message.amount}`);
//                     let total = calcTotal();
//                     // console.log(total);
//                     // console.log(message.amount);
//                     total -= message.amount;
//                     $('#total-price').text('$' + total.toFixed(0));
//                 } else {
//                     promoElement.removeClass('d-flex').addClass('d-none');
//                     promoInput.css('border-color', 'red');
//                 }
//             });
//     })
//     calcTotal();
// })()

// let loader = $('.loader');

$('#submit').click(function () {
    let name = $('#name');
    let lastName = $('#last_name');
    let type = $('#type');
    let hasError = false;


    $('.error-input').hide();

    if (!name.val()) {
        name.next().show();
        // return;
        hasError = true;
    }
    if (!lastName.val()) {
        lastName.next().show();
        // return;
        hasError = true;
    }
    if (!type.val()) {
        type.next().show();
        // return;
        hasError = true;
    }
    if (!hasError) {
        // loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "http://testologia.ru/checkout",
            data: { name: name.val(), last_name: lastName.val(), type: type.val() }
        })
            .done(function(msg) {
                // loader.hide();
                if (msg.success) {
                    alert('Заказ создан');
                } else {
                    alert('Заказ не создан');
                }
                console.log(msg);
            });
    }
})