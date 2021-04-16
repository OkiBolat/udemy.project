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
