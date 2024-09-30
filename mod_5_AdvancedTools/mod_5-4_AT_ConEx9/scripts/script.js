$(document).ready(function () {

    $( "#accordion" ).accordion();

    // $('#orderOk').magnificPopup({
    //     type: 'inline',
    //     midClick: true,
    // });

    let zipInput = $('#inputZip');

    zipInput.on('keydown', (e) => {
        if (!(e.key >= '0' && e.key <= '9') && e.key !== 'Backspace' && e.key !== 'Tab') {
            e.preventDefault();
        }
    });

    $('#sendOrder').click(function (e){
        e.preventDefault();
        let fieldsToCheck = [
            { field: $('#inputFirstName'), message: 'Введите Имя!' },
            { field: $('#inputLastName'), message: 'Введите Фамилию!' },
            { field: $('#inputPhone'), message: 'Введите телефон!' },
            { field: $('#inputCountry'), message: 'Введите страну!' },
            { field: $('#inputAddress'), message: 'Введите адрес!' },
            { field: zipInput, message: 'Введите индекс!' }
        ];
        for (let i = 0; i < fieldsToCheck.length; i++) {
            let input = fieldsToCheck[i].field;
            if (!input.val()) {
                alert(fieldsToCheck[i].message);
                input.focus();
                return;
            }
        }
        if (zipInput.val().length < 6) {
            alert('Индекс должен содержать не менее 6 символов!');
            zipInput.focus();
            return;
        }
        // alert('Спасибо за заказ!');
        fieldsToCheck.forEach(item => item.field.val(''));
        $('.order').hide();
        $('#orderOk').show();
        // $.magnificPopup.open({
        //     items: {
        //         src: '#orderOk'
        //     },
        //     type: 'inline'
        // });
    });

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.card-img-top').magnificPopup({
        type: 'image',
    });

    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});