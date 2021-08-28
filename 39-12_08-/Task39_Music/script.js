const jazzBtn = document.querySelector('#jazz-btn'),
    rockBtn = document.querySelector('#rock-btn'),
    bluesBtn = document.querySelector('#blues-btn'),
    content = document.querySelector('.content'),
    wrapper = document.querySelector('.wrapper');

function createElement(text, number,color) {
    content.innerHTML = '';
    for (let i = 0; i < number; i++) {
        const title = document.createElement('div');
        title.className = 'title';
        title.innerHTML = `<p>${text}</p>`
        changeBgColor(title, color);
        content.appendChild(title);
    }
}
// const buttons = document.querySelectorAll('button');
// buttons.forEach(btn => btn.onclick = (event) => {
//     content.innerHTML = '';
//     createElement(+event.target.value, event.target.innerHTML)
// })

function changeBgColor(element,color) {
    element.style.backgroundColor = `${color}`;
}
jazzBtn.onclick = (event) => {
    createElement(event.target.innerHTML, 4, 'rgb(31, 189, 31)');
}
rockBtn.onclick = (event) => {
    createElement(event.target.innerHTML, 10, 'rgb(76, 89, 204)');
}
bluesBtn.onclick = (event) => {
    createElement(event.target.innerHTML, 8, '#b7e21b');
}