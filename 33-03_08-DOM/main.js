const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    squares = document.querySelectorAll('.wrapper .square'),
    greens = document.getElementsByClassName('square'),
    wrapper = document.querySelector('#wrapperTwo'),
    title = document.querySelector('h1');




console.log(box);//HTML Collection(5)
console.dir(box);

console.log(btns);
console.log(btns[0]);// покажет только первую кнопку
console.log(circle);//HTML Collection динааический 
console.log(squares);//NodeList(3) статический
console.log(greens);//HTML Collection


console.log(wrapper);
wrapper.innerHTML += `<div class="square"></div>`;// добавили элемент 
console.log(wrapper);

console.log(squares);
console.log(greens);

const elements = Array.from(greens);
console.log(elements);

box.style.backgroundColor = 'blue';
box.style.width = '400px';

for (btn of btns) {
    btn.style.borderRadius = '50%'
}//сдеалли все кнопки круглыми

for (s of greens) {
    s.style.backgroundColor='red'
}

box.style.cssText = 'background-color: orange; width:100px;';


// const color = prompt('type your color');

// circle[0].style = `background-color: ${color}`;

// title.className = 'title active';

title.classList.add('active', 'title');
title.classList.remove('active');
title.classList.toggle('active');//переключает класс , если он был, то его убурет, если его нет, то добавит
title.classList.toggle('active');

//Как добавить элемент ================

const div = document.createElement('div');
div.classList.add('black');
// wrapper.append(div)  //wrapper.prepend   добавит в начало  документа , а  append  в конец.
// greens[1].before(div);


greens[1].after(div);

//добавим текст в элемент
div.innerHTML = '<h2>Hello</h2>';  //Hello
// div.textContent = '<h2>Hello</h2>';  //<h2>Hello</h2>




/* 

                            parentElement (body)
                                    |
        (h1)             div.(box)  |   div.(wrapper)
previousSiblingElement     <--<element> --> nextSiblingElement
                                    |
                button1    div(box) |       button 5
            firstElementChild <--children--->lastElementChild

*/


for (let b of btns) {
    b.classList.add('green');
}