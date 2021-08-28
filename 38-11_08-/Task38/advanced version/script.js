const inputText = document.querySelector('#myInput'),
    addBtn = document.querySelector('#addBtn');

inputText.focus();

const todoArray = [];
let iterator = 0;
 // {id, todo:'', done:false}
/*
1.Забираем текст из инпута
2.Создаём объект
    {
    id:0,
    todo: input.value,
    done: false
    }
3.Сохраняем объект в массиве
4.Преобразовываем объекты в элементы списка
    A.{id, todo:'', done:false}->'<li class="list-group-item  d-flex        align-items-center">
                    <input type="checkbox" class="col-1">
                    <h2 class="col-9">Item</h2>
                    <button class="col-2 btn-danger">Remove</button>
                </li>'
    B.Привязываем прослушивание событий 
5.Наплняем элементами список
*/

addBtn.onclick = () => {
    const input = inputText.value.trim();
    if (input) {
        todoArray.push(createTodoItem(input));
        const elArray = todoArray.map(mapTaskToListElement);
        renderParent('#todo-list', elArray);
        inputText.value = '';
        inputText.focus();
    }
}

function createTodoItem(task) {
    return {
        id: iterator++,
        todo: task,
        done:false
    }
}
function renderParent(selector, array) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = '';
        array.forEach(item => {
            element.append(item)
        });
    }
}

function mapTaskToListElement(task, index) {
    const li = document.createElement('li'),
        checkbox = document.createElement('input'),
        title = document.createElement('h2'),
        button=document.createElement('button');

    li.className = 'list-group-item d-flex align-items-center';
    checkbox.type = 'checkbox';
    checkbox.className = 'col-1';
    checkbox.checked = task.done;
    title.className = 'col-9';
    title.innerText = task.todo;
    title.style.textDecoration = task.done ? 'line-through' : 'none';
    button.innerText = 'Remove';
    button.className = 'col-2 btn-danger';

    button.onclick = () => {
        todoArray.splice(index, 1);
        renderParent('#todo-list', todoArray.map(mapTaskToListElement));
    }
    checkbox.onchange = () => {
        todoArray[index].done = checkbox.checked;
        title.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    }
    li.append(checkbox);
    li.append(title);
    li.append(button);
    return li;
}
