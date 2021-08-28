//Task 1
/* Реализовать todoList. у вас должен быть инпут и кнопка, в инпут вводится строка, при нажатии на кнопку создается элемент списка с checkbox и текстом из инпута, элемент отрисовывается под инпутом, если checkbox отмечен, то текст перечеркивается, если checkbox не отмечен текст имеет обычный вид
*/
//======================Teacher version============Task1
const notice = document.querySelector('#input'),
    sendBtn = document.querySelector('.sendBtn'),
    ul = document.querySelector('.ul');
    
notice.focus();
sendBtn.onclick = () => {
    const li = document.createElement('li');
    const check = document.createElement('input');
    // check.type = 'checkbox';
    check.setAttribute('type', 'checkbox');
    li.innerText = notice.value;
    li.prepend(check);
    check.onchange = () => {
        li.style.textDecoration = check.checked ? 'line-through' : 'none';
    }
    ul.append(li);
    notice.value = '';
    notice.focus();
}
//==============Task2========



//====================== My version===============
// function createLi() {
//         const li = document.createElement('li');
//     return li;
// }
// function createCheckbox() {
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     return checkbox;
// }
// function createText() {
//     const text = document.createElement('p');
//     text.innerHTML = notice.value;
//     return text;
// }
// const liRender = () => {
//     if (!notice.value) return alert("Enter the text");
//     let li = createLi();
//     li.classList.add('li');
//     let checkbox = createCheckbox();
//     let text = createText();
//     ul.append(li);
//     li.append(checkbox);
//     li.append(text);
//     notice.value = '';
//     notice.focus();
//     const click = () => {
//     text.classList.toggle('checked');
// }
//     checkbox.addEventListener('click', click);
    
// }
// sendBtn.addEventListener('click', liRender);

/*
//Task2
Сохранять вводимые строчки в массив todoList, как объекты: {todo: 'some text', done: false}. в поле todo сохраняется строчка из инпута, в поле done состояние checkbox (false - checkbox не отмечен, true - отмечен). Если состояние checkbox меняется, значение, хранящееся в поле done у объекта тоже меняется */

// const todoList = [];
// let object = {
//     todo: '', //str from input
//     done: boolean,//checkbox value
// }