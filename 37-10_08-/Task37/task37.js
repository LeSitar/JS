
/*Task1 
динамически добавить на страницу десять одинаковых элементов с классом "box". задать в css стили для этого класса. по клику на элемент он должен удаляться из DOM.
по клику удаляются все элементы кроме последнего */

//==========Task1=================
const wrapper = document.querySelector('.wrapper');
    

for (let i = 0; i < 10; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    wrapper.appendChild(div);
}

wrapper.onclick = () => {
    if (wrapper.children.length == 1) {
    return
    }
    wrapper.lastChild.remove();
}

/*Task2
динамически добавить пять одинаковых элементов на страницу, добавить им в css размер (они должны быть квадратными) и цвет (любой). По клику на элементы они должны менять свою форму - если элемент квадратный, он должен стать круглым и наоборот */

//============Task2================

const container = document.querySelector('.container');

for (let i = 0; i < 5; i++){
    const element = document.createElement('div');
    element.classList.add('element');
    container.appendChild(element);
}
container.onclick = () => {
    for (let child of container.children) {
    child.classList.toggle('circle');
}
}
(e) => e.target.classList.toggle('rund');