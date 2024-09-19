//-------------exercise 1--------------
window.onload = function () {
    let inputFull = document.getElementById('fullName');
    let inputUsername = document.getElementById('userName');
    let password = document.getElementById('password');
//-------------exercise 2--------------
    inputFull.onkeydown = (e) => {
        let number = parseInt(e.key);
        if (!isNaN(number)) {
            e.preventDefault();
        }
    }
//-------------exercise 3--------------
    inputUsername.onkeydown = (e) => {
        if (e.key === ',' || e.key === '.') {
            e.preventDefault();
        }
    }
//-------------exercise 4--------------
    let check = document.getElementById('check');
    check.onchange = () => {
        if (check.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен')
        }
    }
//-------------exercise 5--------------
    let signUp = document.getElementById('confirm');
    let inputs = [
        {id: 'fullName', label: 'label_fullName'},
        {id: 'userName', label: 'label_userName'},
        {id: 'email', label: 'label_email'},
        {id: 'password', label: 'label_password'},
        {id: 'repeatPass', label: 'label_repeatPass'}
    ];
    signUp.onclick = function () {
        for (let input of inputs) {
            let inputField = document.getElementById(input.id);
            let labelText = document.getElementById(input.label).innerText;
            if (!inputField.value) {
                alert(`Заполните поле ${labelText}`);
                return;
            }
        }
        if (password.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов!');
            return;
        }
        if (password.value !== document.getElementById('repeatPass').value) {
            alert('Пароли должны совпадать!');
            return;
        }
        if (!check.checked) {
            alert('Отсутствует согласие с внутренними правилами!');
            return;
        }
        // alert('На вашу почту выслана ссылка, перейдите по ней, чтобы завершить регистрацию');
        document.getElementById('popup').style.display = 'flex';
        document.getElementById('popupText').innerHTML = `Уважаемый <span style="color: #D72F3F;">${inputFull.value}</span>,
        на вашу почту <span style="color: #D72F3F;">${document.getElementById('email').value}</span> выслана ссылка, 
        перейдите по ней, чтобы завершить регистрацию.`
    }
//-------------exercise 6--------------
    let popupOk = document.getElementById('popupOk');
    popupOk.onclick = function () {
        document.getElementById('popup').style.display = 'none';
        inputs.forEach(input => {
            if (input.id !== 'userName') {
                document.getElementById(input.id).value = '';
            }
        });
        switchToLogIn();
    }
//-------------exercise 6--------------
    let haveAccount = document.getElementById('haveAccount');
    haveAccount.onclick = function () {
        switchToLogIn();
    }
    function switchToLogIn() {
        document.getElementById('homeWorks-title').innerText = 'Log in to the system';
        document.getElementById('inputFullName').style.display = 'none';
        document.getElementById('inputEmail').style.display = 'none';
        document.getElementById('inputRepeatPass').style.display = 'none';
        document.getElementById('inputCheck').style.display = 'none';
        signUp.innerText = 'Sign In';
        haveAccount.style.display = 'none';
        signUp.onclick = function () {
            if (!inputUsername.value) {
                alert(`Заполните поле ${document.getElementById('label_userName').innerText}`);
                return;
            }
            if (!password.value) {
                alert(`Заполните поле ${document.getElementById('label_password').innerText}`);
                return;
            }
            alert(`Добро пожаловать, ${inputUsername.value}!`)
        }
    }
}