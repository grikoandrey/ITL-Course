$(document).ready(function () {
    //подключение библиотек-----------------------
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.product-image').magnificPopup({
        type: 'image',
    });

    $('#phone-input').inputmask({"mask": "(999) 999-9999"});

// смотри модуль 9-1-----------------------------------
    if (!localStorage.getItem('cookieAccepted')) {
        $('.cookie').show();
    }

    $('.cookie-accept').click(function () {
        $('.cookie').hide();
        localStorage.setItem('cookieAccepted', '1');
    })

    let cookie = {
        set: (name, value, options) => {
            if (!name || !value) {
                return null;
            }
            let string = `${name}=${value}`;
            if (options) {
                string += `; ${options}`;
            }
            document.cookie = string;
            return cookie
        },
        get: (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        },
        delete: (name) => {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        }
    }

// $.ajax( {
//     method: 'GET',
//     url: `https://testologia.ru/test-cookie?name=${productInput.value}`,
//     xhrFields: {
//         withCredentials: true,
//     }
// })

//добавление элементов в localStorage, чтобы сохранять массив для работы
//пример применения хранилища localStorage
    $('.product-action').click(function () {
        let productTitle = $(this).siblings('.product-info').find('h6').text().trim();

        let cartArray = [];
        let cart = localStorage.getItem('cart');
        if (cart) {
            cartArray = JSON.parse(cart);
        }
        cartArray.push(productTitle);
        localStorage.setItem('cart', JSON.stringify(cartArray));
        console.log(localStorage);
    });
})

