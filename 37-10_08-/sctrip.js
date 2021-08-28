const btn = document.querySelector('#btn'),
    filmInput = document.querySelector('#film_input'),
    filmUl = document.createElement('ul'),
    films = [];

document.querySelector('.container').append(filmUl);


filmInput.focus();
//===============Version 1
//let counter = 1;
// btn.onclick = () => {
//     let title = filmInput.value;
//     title = title.trim(); // обрезает пробелы
//     if (!title) {
//         alert('Enter title!'); return
//     }
//     const li = document.createElement('li');
//     li.innerHTML = `${counter++}. ${title}`;
//     filmUl.append(li);
//     filmInput.value = '';
//     filmInput.focus();
//     }

//==============Version2
//let counter = 1;
// btn.onclick = () => {
//     let title = filmInput.value.trim();
//     if (!title) {
//         alert('Enter title!'); return
//     }
//     const li = createLi(counter, title);
//     counter++;
//     filmUl.append(li);
//     cleanInput(filmInput);
// }

// function createLi(number, title) {
//     const li = document.createElement('li');
//     li.innerHTML = `${number}. ${title}`;
//     cleanInput(filmInput)
//     return li;
//     }
// function cleanInput(element) {
//     element.value = '';
//     element.focus();
//     }

//==================Version3// каждый раз создаётся новый список а не добавляется   как это было сверху 

// btn.onclick = () => {
//     let title = filmInput.value.trim();
//     if (!title) {
//         alert('Enter title!');
//         cleanInput(filmInput);
//     } else {
//         films.push(title);
//         filmUl.innerHTML = '';
//         renderUl();
//         cleanInput(filmInput)
//     }
// }
// function renderUl() {
//     for (let i = 0; i < films.length; i++) {
//         filmUl.innerHTML += `<li>${i+1}.${films[i]}</li>`
//     }
// }    

// function cleanInput(element) {
//     element.value = '';
//     element.focus();
// }


//=============Version 4====================

btn.onclick = () => {
    let title = filmInput.value.trim();
    if (!title) {
        alert('Enter title!');
        cleanInput(filmInput);
    } else {
        films.push(title);
        filmUl.innerHTML = '';
        renderUl();
        cleanInput(filmInput)
    }
}
// function renderUl() {
//     const arr = films.map((film, index) => createFilmLi(film, index));
//     arr.forEach(li => filmUl.append(li));
//     }

function renderUl() {
    films.map((film, index) => createFilmLi(film, index)).forEach(li => filmUl.append(li));
    }

function createFilmLi(title, index) {
    const li = document.createElement('li');
    li.innerHTML = `${index +1}. ${title}`;
    li.onclick = () => {
        li.classList.toggle('line-through');
    }
    return li;
    }

function cleanInput(element) {
    element.value = '';
    element.focus();
}