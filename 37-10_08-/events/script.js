const input = document.querySelector('#simple-input');

// input.onchange = (event) => { 
//     // console.log(input.value);
//     console.log(event.target.value);
// }

// input.oninput = (event) => {  // следит за каждым изменением 
//     console.log(event.target.value);
// }

input.onkeydown = (event) => {
    if (event.keyCode === 13) {  // при нажатии на  Enter
        console.log(event.target.value);
    }
}

// input.focus();
input.onfocus = () => {
    console.log(input.value);
}

input.onblur = () => {  ///  при выоходе из фокуса, напечатает гууд бай
    console.log('good-bye!');
}

const myForm = document.querySelector('#myForm');

myForm.onsubmit = (event) => {
    event.preventDefault();  //отменяет поведение браузера, которое установлено по умолчанию
    console.log(myForm.querySelector('#firstName').value);
    console.log(myForm.querySelector('#secondName').value);
}
const link = document.querySelector('a');
link.onclick = (event) => {
    event.preventDefault();
    alert('No tv))')
}