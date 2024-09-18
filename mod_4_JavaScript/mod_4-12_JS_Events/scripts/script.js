// function showMessage(element) {
//     alert(element.innerText);
//     alert('2');
// }

// let button = document.getElementsByTagName('button')[0];
// button.onclick = function () {
//     alert('Let`s kiting!');
//     console.log(this.innerText);
// }
// button.onclick = (event) => {
//     console.log(event.target);
// }
// button.onclick = null;

// button.addEventListener('click', (e) => {
//     console.log(e.target.innerText);
// })

// function fn (e) {
//     console.log(e.target.innerText);
// }
//
// button.addEventListener('click', fn);
// button.removeEventListener('click', fn)

// let link = document.getElementsByTagName('a')[0];
//
// link.onclick = (e) => {
//     e.preventDefault();
//     console.log(e.target);
// };

// let button = document.getElementById("btn");
// let div = document.getElementsByTagName('div')[0];

// button.onclick = (e) => {
//     console.log('button');
//     e.stopPropagation();
// }

// div.onclick = (e) => {
//     if (e.target.nodeName.toLowerCase() === 'div') {
//         console.log(e.target);
//     }
// }

// div.onclick = (e) => {
//     let el = e.target;
//     if (el.id === 'btn') {
//         el = el.parentElement;
//     }
//     el.style.background = "blue";
// }

window.onload = function() {
    let input = document.getElementById('input');

// input.onkeydown = (e) => {
//     let number = parseInt(e.key);
//     if (isNaN(number)) {
//         return false;
//     }
//     console.log(number);
// }

// input.onfocus = (e) => {
//     console.log('focus');
// }
// input.onblur = (e) => {
//     console.log('blur');
//     e.target.value = `${e.target.value.slice(0, 3)}-${e.target.value.slice(3, 5)}-${e.target.value.slice(5, 7)}`;
// }


    input.onchange = (e) => {
        e.target.value = `${e.target.value.slice(0, 3)}-${e.target.value.slice(3, 5)}-${e.target.value.slice(5, 7)}`;
    }
}
