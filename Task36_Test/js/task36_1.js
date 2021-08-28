//создать инпут с кнопкой (плейсхолдер для инпута введите название фильма), после нажатия на кнопку название введенного фильма с номером по порядку появляется под инпутом.

const goBtn = document.querySelector('.goBtn'),
    ol = document.querySelector('.list'),
    movieTitle = document.querySelector('#movieTitle');


function createLi(name) {
    const li = document.createElement('li');
    li.innerHTML = name;
    return li;
}
const liRender = () => {
    if (movieTitle.value == '') return alert("Enter the title");
    let li = createLi(movieTitle.value);
    ol.append(li);
    movieTitle.value = '';
}
goBtn.addEventListener('click', liRender);
