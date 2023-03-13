"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false,
};

const a = prompt("Один из ласт фильмов?", ""),
      b = prompt("Оценка", ""),
      c = prompt("Один из ласт фильмов?", ""),
      d = prompt("Оценка", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);





