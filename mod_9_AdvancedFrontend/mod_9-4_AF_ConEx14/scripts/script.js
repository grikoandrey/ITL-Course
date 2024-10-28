//-------------exercise 1--------------
window.onload = function () {
    let fullName = document.getElementById('fullName');
    let userName = document.getElementById('userName');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
//-------------exercise 2--------------Запрет на ввод в поле Имя цифр
    fullName.onkeydown = (e) => {
        let number = parseInt(e.key);
        if (!isNaN(number)) {
            e.preventDefault();
        }
    }
//-------------exercise 3--------------Запрет на ввод в поле Логин точки и запятой
    userName.onkeydown = (e) => {
        if (e.key === ',' || e.key === '.') {
            e.preventDefault();
        }
    }
//-------------exercise 4--------------Проверка чек бокса
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
        {
            id: 'fullName',
            label: 'label_fullName',
            regex: /^[a-zа-я\s]+$/i,
            // errorMessage: 'Введите в формате примера',
            errorSelector: '.error.fullName'
        },
        {
            id: 'userName',
            label: 'label_userName',
            regex: /^[a-zA-Z0-9_-]+$/,
            // errorMessage: 'Введите в правильном формате',
            errorSelector: '.error.userName'
        },
        {
            id: 'email',
            label: 'label_email',
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            // errorMessage: 'Введите корректный E-mail',
            errorSelector: '.error.email'
        },
        {
            id: 'password',
            label: 'label_password',
            regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:"<>?~\-=\[\]\\';,./]).{8,}$/,
            // errorMessage: 'Введите не менее 8 символов, включая заглавную букву, цифру и спецсимвол',
            errorSelector: '.error.password'
        }
    ];

    // Функция для валидации полей
    function validateInputs() {
        let hasError = false;

        inputs.forEach(input => {
            let inputField = document.getElementById(input.id);
            let labelElement = document.getElementById(input.label);
            let errorText = document.querySelector(input.errorSelector);
            let labelText = labelElement.innerText;

            // Пропускаем скрытые поля
            if (inputField.offsetParent === null) return;
            // Проверка на заполненность поля
            if (!inputField.value) {
                inputField.style.borderBottom = '2px solid #DD3142';
                labelElement.style.color = '#DD3142';
                if (!labelElement.innerText.includes('Заполните поле')) {
                    labelElement.innerText = `Заполните поле ${labelText}`;
                }
                hasError = true;
                errorText.style.display = 'none';
            }
            // Проверка на соответствие регулярному выражению
            else if (!inputField.value.match(input.regex)) {
                inputField.style.borderBottom = '2px solid #DD3142';
                errorText.style.display = 'block'; // Показ сообщения о некорректном формате
                labelElement.style.color = '#DD3142'; // Подсветка текста метки
                hasError = true;
            }
            // Если корректно, очищаем все стили ошибок
            else {
                inputField.style.borderBottom = '';
                errorText.style.display = 'none';
                labelElement.style.color = '';
                labelElement.innerText = labelText; // Сброс текста метки
            }

            // Обработчик для изменения поля
            inputField.addEventListener('input', () => {
                inputField.style.borderBottom = ''; // Убираем выделение
                labelElement.style.color = ''; // Возвращаем исходный цвет
                labelElement.innerText = labelText; // Возвращаем исходный текст метки
            });
        });
        return hasError; // Возвращаем наличие ошибок
    }

    // Функция проверки совпадения паролей
    function validatePasswordMatch() {
        let repeatPass = document.getElementById('repeatPass');
        let repeatPassError = document.querySelector('.error.repeatPass');
        if (password.value !== repeatPass.value) {
            repeatPassError.style.display = 'block';
            return true;
        } else {
            repeatPassError.style.display = 'none';
            return false;
        }
    }

    // Функция проверки согласия с условиями
    function validateTermsAgreement() {
        let check = document.getElementById('check');
        let checkError = document.querySelector('.error.check');
        if (!check.checked) {
            checkError.style.display = 'block';
            return true;
        } else {
            checkError.style.display = 'none';
            return false;
        }
    }

    // Функция отображения успешного сообщения
    function showSuccessPopup() {
        document.getElementById('popup').style.display = 'flex';
        document.getElementById('popupText').innerHTML = `Уважаемый <span style="color: #D72F3F;">
        ${fullName.value}</span>, на вашу почту <span style="color: #D72F3F;">
        ${document.getElementById('email').value}</span> выслана ссылка, 
        перейдите по ней, чтобы завершить регистрацию.`;
    }

    //----------exercise 14-1-2-----Создание данных и сохранение в localStorage-------
    function saveUserToLocalStorage() {
        // Создание данных пользователя
        let user = {
            fullName: fullName.value,
            userName: userName.value,
            email: email.value,
            password: password.value,
        };
        // Получаем текущий массив клиентов из Local Storage
        let clients = JSON.parse(localStorage.getItem('clients')) || [];
        // Добавляем нового пользователя в массив
        clients.push(user);
        // Сохраняем обновленный массив обратно в Local Storage
        localStorage.setItem('clients', JSON.stringify(clients));
    }

    signUp.onclick = function (e) {
        e.preventDefault();
        let hasError = false;
        // Валидация полей ввода
        hasError = validateInputs() || hasError;
        // Проверка совпадения паролей
        hasError = validatePasswordMatch() || hasError;
        // Проверка согласия с условиями
        hasError = validateTermsAgreement() || hasError;
        // Получаем текущий массив клиентов из Local Storage
        let clients = JSON.parse(localStorage.getItem('clients')) || [];
        // Проверка на существование пользователя по имени или email
        let userExists = clients.some(client =>
            client.fullName === fullName.value || client.email === email.value
        );

        if (userExists) {
            alert('Такой пользователь уже существует! Измените данные или зайдите под своей учетной записью!');
            location.reload();
            return;
        }
        // Если ошибок нет, показываем сообщение и сохраняем пользователя
        if (!hasError) {
            showSuccessPopup();
            saveUserToLocalStorage();
        }
    };
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
//-------------exercise 6-1--------------
    let haveAccount = document.getElementById('haveAccount');
    haveAccount.onclick = function () {
        switchToLogIn();
    }
    let title = document.getElementById('homeWorks-title');
    function switchToLogIn() {
        title.innerText = 'Log in to the system';
        let fieldsForHide = ['inputFullName', 'inputRepeatPass', 'inputEmail', 'inputCheck'];
        fieldsForHide.forEach(id => document.getElementById(id).style.display = 'none');
        signUp.innerText = 'Sign In';
        haveAccount.innerText = 'Registration';
        haveAccount.onclick = reloadPage;
        signUp.onclick = function (e) {
            e.preventDefault();
            enter(e);
        }

    }
    function enter (e) {
        e.preventDefault();
        let hasError = false;
        hasError = validateInputs([inputs.find(input => input.id === 'userName'),
            inputs.find(input => input.id === 'password')]) || hasError;
        let clients = JSON.parse(localStorage.getItem('clients'));
        let user = clients?.find(client => client.userName === userName.value);
        if (!user && userName.value) {
            let user = document.querySelector('.error.userName');
            user.innerText = 'Такой пользователь не зарегистрирован';
            userName.style.borderBottom = '2px solid #DD3142';
            user.style.display = 'block';
            hasError = true;
        } else {
            document.querySelector('.error.userName').style.display = 'none';
            userName.style.borderBottom = '';
        }

        if (user && user.password !== password.value && password.value) {
            let pwdErr = document.querySelector('.error.password');
            pwdErr.innerText = 'Неверный пароль';
            password.style.borderBottom = '2px solid #DD3142';
            pwdErr.style.display = 'block';
            hasError = true;
        } else {
            document.querySelector('.error.password').style.display = 'none';
            password.style.borderBottom = '';
        }

        // userName.addEventListener('input', () => {
        //     document.querySelector('.error.userName').style.display = 'none';
        //     userName.style.borderBottom = '';
        // });

        // password.addEventListener('input', () => {
        //     document.querySelector('.error.password').style.display = 'none';
        //     password.style.borderBottom = '';
        // });

        if (!hasError) {
            title.innerText = `Welcome, ${user.fullName}!`;
            let fieldsForHide = ['inputUserName', 'inputPwd'];
            fieldsForHide.forEach(id => document.getElementById(id).style.display = 'none');
            document.querySelector('.homeWorks__haveAccount').style.display = 'none';
            document.querySelector('.homeWorks__info-description').style.display = 'none';
            title.style.textAlign = 'center';
            title.style.marginBottom = '200px';
            signUp.innerText = 'Exit';
            signUp.onclick = reloadPage;
        }
    }
    function reloadPage(e) {
        e.preventDefault();
        window.location.reload();
    }
};