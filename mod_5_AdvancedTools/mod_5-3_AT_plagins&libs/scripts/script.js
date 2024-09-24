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