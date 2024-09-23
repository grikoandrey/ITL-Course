// $(document).ready(function () {
//     $('h1').click(function () {
//         console.log('clicked');
//     })
// })

$( "#accordion" ).accordion();

// $('h1').click(function () {$( "#dialog" ).dialog()});

// $('.single-item').slick();

$('.single-item').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});