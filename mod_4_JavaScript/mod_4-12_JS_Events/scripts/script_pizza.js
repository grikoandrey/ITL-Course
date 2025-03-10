document.getElementById('choose-pizza').onclick = () => {
    document.getElementsByClassName('products')[0].scrollIntoView({behavior: "smooth" });
}

let productInput = document.getElementById('product-card-input');
let addToCardButtons = document.getElementsByClassName('btn-add-to-card');

// в рамках модуля 9-5
// for (let i = 0; i < addToCardButtons.length; i++) {
//     addToCardButtons[i].onclick = function (e) {
//         productInput.value = e.target.parentElement.previousElementSibling.children[0].innerText;
//         // console.log(e.target.parentElement.previousElementSibling.children[0].innerText);
//         document.getElementsByClassName('order')[0].scrollIntoView({behavior: "smooth" });
//     }
// }

// изменяем часть кода в рамках модул] 9-5 для применения контекста (this)----------
for (let i = 0; i < addToCardButtons.length; i++) {
    addToCardButtons[i].onclick = scrollToForm;
}


function scrollToForm() {
    productInput.value = this.parentElement.previousElementSibling.children[0].innerText;
    document.getElementsByClassName('order')[0].scrollIntoView({behavior: "smooth" });
}
// ----------------------------

document.getElementById('createOrder').onclick = function () {
    let addressInput = document.getElementById('address-input');
    let phoneInput = document.getElementById('phone-input');
    if (!productInput.value) {
        alert('Выберите пиццу!');
        return;
    }
    if (!addressInput.value) {
        alert('Введите адрес!');
        return;
    }
    if (!phoneInput.value) {
        alert('Введите телефон!');
        return;
    }
    alert('Спасибо за заказ!');
    productInput.value = '';
    addressInput.value = '';
    phoneInput.value = '';
}