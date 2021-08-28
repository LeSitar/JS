const numberOfFilms = +prompt('How many films did you watch last month?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: { }, // ключами в объекте будут нвзвания фильмов, рейтин- значение {'Titanik' : 8.8, 'Ja plakal': 9.4}
    genres: [],
    private: false
}


// Зваполнить анкету выше
// написать метод проверки приват,  если фалс  песчатаем базу, если  труе, пользователь не дал права на печать 
