"use strict";
const numberOfFilms = prompt('Сколько фильмов вы посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}
const lastFilm = prompt('Последний фильм?');
const stars = prompt('Оценка?')
 personalMovieDB.movies[lastFilm] = stars;

 if (4 == 9) {
     console.log('Ok!');
 } else {
     console.log('Error');
 }

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('mnogo');
// }else {
//     ('ok');
// }
// (num === 50) ? console.log('ok') : console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('no');
        break;
    case 100: 
        console.log('no');
        break;
    default:
        console.log('so bad man, so bad');
        break;

}
