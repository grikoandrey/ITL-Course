//--------------------task#1-------------
// Импортируйте данные из файлов в массивы аналогично тому, как было в уроке.
(async function fetchData() {
    try {
        // Асинхронно получаем и преобразуем данные в JSON в одном шаге
        const [cities, specializations, persons] = await Promise.all([
            fetch('data/cities.json').then(response => response.json()),
            fetch('data/specializations.json').then(response => response.json()),
            fetch('data/persons.json').then(response => response.json())
        ]);

        // Передаем обработанные данные в функцию testData
        processData({cities, specializations, persons});
    } catch (error) {
        console.error("Error fetching data:", error);
    }
})();

// Функция getInfo для отображения информации в требуемом формате
function getInfo(cities) {
    const city = cities.find(city => city.id === this.personal.locationId);
    return `${this.personal.firstName} ${this.personal.lastName}, ${city.name}`;
}


function processData({persons, cities, specializations}) {
//--------------------task#2-------------
//Создайте самостоятельную функцию getInfo, которая будет возвращать в одной строке имя,
// фамилию и город пользователя, используя this. Эта функция будет использоваться для вывода
// полного имени в вашем коде, вызывать ее нужно будет с помощью метода call.
//Пример вывода: «Алексей Чеканов, Москва».
    console.log('--------------------------список всех пользователей в требуемом формате:')
    persons.forEach((person) => {
        console.log(getInfo.call(person, cities));
    })
//--------------------task#3-------------
//Найдите среди пользователей всех дизайнеров, которые владеют Figma и выведите
// данные о них в консоль с помощью getInfo.
    const isDesigner = specializations.find(spec => spec.name.toLowerCase() === 'designer');
    console.log('-------------------------------все дизайнеры, владеющие Figma:');
    if (isDesigner) {
        persons.forEach((person) => {
            let isFigma = person.skills.some(skill => skill.name.toLowerCase() === 'figma');
            if (isFigma && person.personal.specializationId === isDesigner.id) {
                console.log(getInfo.call(person, cities));
            }
        })
    }
//--------------------task#4-------------
//Найдите первого попавшегося разработчика, который владеет React.
// Выведите в консоль через getInfo данные о нем.
    const isReact = persons.find(pers => pers.skills.some(skill => skill.name.toLowerCase() === 'react'));
    if (isReact) {
        console.log('------------------------------первый попавшийся разработчик на React:')
        console.log(getInfo.call(isReact, cities));
    }
//--------------------task#5-------------
//Проверьте, все ли пользователи старше 18 лет. Выведите результат проверки в консоль.
    const over18 = persons.every(person => {
        const birthDate = new Date(person.personal.birthday.split('.').reverse());
        birthDate.setFullYear(birthDate.getFullYear() + 18); // Добавляем 18 лет к дате рождения
        return birthDate <= new Date(); // Проверяем, наступила ли дата
    });
    console.log('--------------------------------')
    console.log("Все пользователи старше 18 лет:", over18 ? 'Да' : 'Нет');

//--------------------task#6-------------
//Найдите всех backend-разработчиков из Москвы, которые ищут работу на полный день и
// отсортируйте их в порядке возрастания зарплатных ожиданий.
    const isBackEnd = specializations.find(spec => spec.name.toLowerCase() === 'backend');
    const isMoscow = cities.find(city => city.name.toLowerCase() === 'москва');
    if (isBackEnd && isMoscow) {
        let isDeveloper = persons.filter(person => {
            return (
                person.personal.specializationId === isBackEnd.id && // Проверка на backend-специализацию
                person.personal.locationId === isMoscow.id &&
                person.request.some(request =>
                    request.name.toLowerCase() === 'тип занятости' &&
                    request.value.toLowerCase() === 'полная'
                ))
        }).sort((a, b) => {
            salaryA = a.request.find(request => request.name.toLowerCase() === 'зарплата').value;
            salaryB = b.request.find(request => request.name.toLowerCase() === 'зарплата').value;
            return salaryA - salaryB;
        });
        console.log("------------Backend-разработчики из Москвы с полной занятостью, отсортированные по зарплате:");
        isDeveloper.forEach(person => console.log(getInfo.call(person, cities)));
    }
//--------------------task#7-------------
//Найдите всех дизайнеров, которые владеют Photoshop и Figma одновременно на уровне не ниже 6 баллов.
    if (isDesigner) {
        let isDesigner6 = persons.filter(person => {
            const isPhotoshop = person.skills.some(skill => skill.name.toLowerCase() === 'photoshop' && skill.level >= 6);
            const isFigma = person.skills.some(skill => skill.name.toLowerCase() === 'figma' && skill.level >= 6);
            return (
                person.personal.specializationId === isDesigner.id &&
                isPhotoshop && isFigma
            )
        });
        console.log("--------------Дизайнеры, владеющие Photoshop и Figma одновременно на уровне не ниже 6:");
        isDesigner6.forEach(person => console.log(getInfo.call(person, cities)));
    }
//--------------------task#8-------------
//Соберите команду для разработки проекта:
//   - дизайнера, который лучше всех владеет Figma
//   - frontend разработчика с самым высоким уровнем знания Angular
//   - лучшего backend разработчика на Go
    const isFrontEnd = specializations.find(spec => spec.name.toLowerCase() === 'frontend');
    const bestFigmaDesigner = persons
        // фильтруем дизайнеров
        .filter(person => person.personal.specializationId === isDesigner.id)
        .reduce((best, person) => {
            //находим навык Figma
            const figmaSkill = person.skills.find(skill => skill.name.toLowerCase() === 'figma');
            // Пропускаем, если нет навыка Figma
            if (!figmaSkill) return best;
            //если еще нет лучшего, принимаем первого текущего
            if (!best) return person;
            //обновляем лучшего, если уровень выше у текущего
            let bestFigma = best.skills.find(s => s.name.toLowerCase() === 'figma');
            if (figmaSkill.level > bestFigma.level)
                return person;
            return best;
        }, null);

    const bestAngularFrontend = persons
        .filter(person => person.personal.specializationId === isFrontEnd.id)
        .reduce((best, person) => {
            const angularSkill = person.skills.find(skill => skill.name.toLowerCase() === 'angular');
            if (!angularSkill) return best;
            return (!best || angularSkill.level > best.skills.find(s => s.name.toLowerCase() === 'angular').level) ? person : best;
        }, null);

    const bestGoBackend = persons
        .filter(person => person.personal.specializationId === isBackEnd.id)
        .reduce((best, person) => {
            const goSkill = person.skills.find(skill => skill.name.toLowerCase() === 'go');
            if (!goSkill) return best;
            return (!best || goSkill.level > best.skills.find(s => s.name.toLowerCase() === 'go').level) ? person : best;
        }, null);

    console.log("Команда для проекта:");
    console.log("Лучший дизайнер с навыком Figma:", bestFigmaDesigner ? getInfo.call(bestFigmaDesigner, cities) : "Не найден");
    console.log("Лучший frontend разработчик с навыком Angular:", bestAngularFrontend ? getInfo.call(bestAngularFrontend, cities) : "Не найден");
    console.log("Лучший backend разработчик с навыком Go:", bestGoBackend ? getInfo.call(bestGoBackend, cities) : "Не найден");
//--------------------the-end------------
}
