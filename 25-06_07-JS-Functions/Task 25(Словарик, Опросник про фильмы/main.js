/* 1. Реализовать заполнение объекта movies, в зависомости от количества просмотренных фильмов. (стрктура хранения данных: название фильма-ключ, рейтинг - значение)
    2. Спросить три любимых жанра и сохранить ответы в массив genres;
    3. Реализовать метдо, который дает или не дает распечатать полученные данные (проверка поля private)
    4. Оценить количество промотренных фильмов и вывести соотвествующее сообщение (
        от 0 - до 1;
        от 1 до 3;
        от 3 - 5;
        > 5
    )
 */
// Задание 1
// Все методы, кроме start() в personalMovieDB  сделать методами объекта
let numberOfFilms;
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        toString: function () {
            let moviesList = '';
            for (let key in this) {
                if (typeof this[key] != 'function');
                moviesList+= `'${key}': ${this[key]}\n`
            }
            return moviesList;
        }
    }, 
    genres: [],
    private: false,
    getMovieData: function (filmsNumber) {
        for (let i = 0; i < filmsNumber; i++) {
            const title = prompt('Enter the title of last watched movie');
            const rate = parseFloat(prompt('How do you rate it?'));
            console.log(rate);
            if (title != null && title != '' && rate != null && rate != '' && !isNaN(rate)) {
                this.movies[title] = rate;
            } else {
                alert('write correct data')
                i--;
            }
        }
    },
    getGenre: function (number) {
        for (let i = 1; i <= number; i++) {
            this.genres[i - 1] = prompt(`What is your top- ${i} genre?`);
        }
    },
    showMovieDB:function () {
        if (!this.private) {
        alert(`You did watched: ${this.count} films`);
            alert('You saved film:\n' + this.movies);
        alert(`You favorite genre: ${this.genres}`);
        alert(this.levelScoreMessage());
        }
    },
    levelScoreMessage:function() {
        if (this.count < 5) {
        return 'don\'t like movies?';
        } else if (this.count >= 5 && this.count <= 15) {
        return 'you are classic viewer\u{1F60D}';
        } else if (this.count> 15 && this.count <= 30) {
        return 'you\'re a movie buff!! ';
        }
        else {
            return 'error' ;
        }
    },
}
personalMovieDB.getMovieData(1);
personalMovieDB.getGenre(1);
personalMovieDB.showMovieDB();

function start() {
    do {
        numberOfFilms = +prompt('How many films did you watch last month?');
    } while (isNaN(numberOfFilms));
}



//  Задание 2
// Напсиать функцию, которая укорачивает строку(если слово длиннее, чем maxLenght- обрезать до  maxLenght и добавить ..., если короче - вернуть изначальную строку)

function stringCat(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

function stringCat(str, maxLength) {
    return (str.length > maxLength) ? str.slice(0, maxLength) + '...' : str;
}

console.log(stringCat('hello world!', 5));
console.log(stringCat('hello', 5));


stringCat('hello world!', 5) --> 'hello...'
stringCat('hello', 5)--> 'hello'

/*
// Задание 3
игра русско-английский словарь;
двухмерный массив в котором хранятся пары слов, русские и  английские(всего пять пар),
спросить пользователя перевод английского слова из массива, если перевод правильный- выводить "Отлично",
если нет,- показываем правильный перевод слова.

есть цикл , показываем только английские слова 
сравнить словао из ответа со словом правильным 

*/
const words = [             // words[1] [0]  bike --> eng index=0 ru index=1;
    ['food', 'еда', 'Essen'],
    ['bike', 'велосипед', 'Fahrrad'],
    ['apple', 'яблоко', 'Apfel'],
    ['do', 'делать', 'machen'],
    ['mean', 'иметь в виду', 'meinen'],
]
const ru = 1;
const eng = 0;
const de = 2;

checkUserTranslation();

function checkUserTranslation() {
    for (let i = 0; i < words.length; i++){
        const userTranslation = getUserTranslation(i);
        if (userTranslation === words[i][ru]) alert('Correct');
        else alert(`Wrong, correct answer is ${words[i][ru]}`);
    }  
}
function getUserTranslation(index) {
    return prompt(`how do you translate the word ${words[index][eng]}?`);
    }