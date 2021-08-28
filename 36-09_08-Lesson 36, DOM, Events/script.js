const names = ['Ivan', 'Anna', 'Mariya', 'Nikolay', 'Peter', 'Olga'];

const ul = document.querySelector('#list'),
    addBtn = document.querySelector('#addBtn');

let i = 0;

function getRnd(max){
    return parseInt(Math.random() * max);
}
// addBtn.onclick = () => {
//     const index = getRnd(names.length);
//     // ul.innerHTML += `<li>${names[index]}</li>`;
//     // const li = document.createElement('li');
//     // li.innerHTML = `${ names[index]}`;
//     ul.append(createLi(names[index]));
//     // ul.prepend(li);
//     // ul.before(li);
//     // ul.after(li);
//     // ul.insertAdjacentHTML('afterbegin', `<li>${names[index]}</li>`); // указываем куда вставить  строчку afterend// beforbegin
// }

const liRender = () => {
    let li = createLi(names[i++]);
    ul.append(li);
    if (i === names.length) addBtn.removeEventListener('click', liRender);
    
}
addBtn.addEventListener('click', liRender);


function getRandomColor() {
    return `rgb(${getRnd(256)},${getRnd(256)},${getRnd(256)})`
}
function createLi(name) {
    const li = document.createElement('li');
    li.innerHTML = name;
    li.style.backgroundColor = getRandomColor();
    li.classList.add('nameList');
    li.onclick = changeBg;
    return li;
}
//======================================================
const box = document.querySelector('.box');
// box.onclick = changeBg;
function changeBg(event) {
    event.target.style.backgroundColor = getRandomColor();
} //event.target   показывает нам конкретный элемент к которому мы обращаемся 

box.addEventListener('click', changeBg); /// click   имя события которые знает браузер
box.addEventListener('click', () => {
    console.log('click')
})

// box.removeEventListener('click',)


