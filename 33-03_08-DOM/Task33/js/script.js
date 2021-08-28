/* Задания:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland"
    ]
};


//1
// const promotion = document.querySelector('.promo__adv');
// let promoElements = promotion.innerHTML;
// function removeBlocks() {
//     while (promotion.firstChild) {
//         promotion.removeChild(promotion.firstChild)
//     }
// }
// removeBlocks();

// const adv = document.querySelectorAll('.promo__adv img, .promo__adv div');
// adv.forEach((item) => item.remove());

const adv = document.querySelector('.promo__adv').children;
for (let i = adv.length-1; i >=0; i--) {
    adv[i].remove();
}


//2
document.querySelector('.promo__bg .promo__genre').innerHTML = 'DRAMA';

//3
const bg= document.querySelector('.promo__bg');
function changeBgImg() {
    bg.style.backgroundImage = 'url(./img/bg.jpg) '
}
changeBgImg();

//4 
const list = document.querySelector('.promo__interactive-list').children;
for (let i = list.length - 1; i >= 0; i--) {
    list[i].remove();
}

let sortiedMovies = [movieDB.movies.sort()];
const filmsName = document.querySelector('.promo__interactive-list');
for (let item of movieDB.movies) {
    filmsName.innerHTML += `<li> ${item}</li>`
}

