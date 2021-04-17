"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');

function start() {
    numberOfFilms = prompt('Сколько фильмов вы посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы посмотрели?');

    }
}
start()

////////////////////

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

// //////////


function rememberMyFilmes() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Последний фильм?'),
          b = prompt('Оценка?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
    }else {
        console.log('error');
        i--;
    };  
    }
}
rememberMyFilmes();  
/////////////////////////////



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")

    }else if (personalMovieDB >= 10 && personalMovieDB <= 30){
        console.log('Вы классический зритель')

    }else if(personalMovieDB >= 30) {
        console.log('Вы киноман')
    }else {
        console.log('Произошла ошибка')
    } 
}

detectPersonalLevel();

///////////////////////////////

console.log(personalMovieDB);


///////////

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB.privat)


    }
    
   
}
showMyDB(personalMovieDB)


/////
function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt('Любимый жанр ${i}');
    }
}




















// методы и свойства строк и чисел

// const str = 'test';
// const arr = [1, 2, 4];

// console.log(str.toUpperCase())
// console.log(str)
// console.log(str.toLowerCase)
// console.log(str[2])

// let fruit = 'some fruit'
// console.log(fruit.indexOf('q'))

// const logg = 'hello world';
// console.log(logg.slice(6, 10));
// console.log(logg.substring(6, 10));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num))

// const test = '12.2px';
// console.log(parseInt(test))
// console.log(parseFloat(num))











// let num = 20;

// function showFirstMessage (text) {
//     console.log(text);
//     num = 10;
    
// }
// showFirstMessage(num);
// console.log(num);

// function calc (a, b) {
//     return (a + b);
// }
// console.log(calc(4, 5))
// console.log(calc(3, 3))


// function ret () {
//     let num = 50;



//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// //function expression
// let logger = function() {
//     console.log('hello')
// };
// logger();

// const calc = (a, b) =>  a + b










// const a = prompt('Последний фильм?'),
//       b = prompt('Оценка?'),
//       c = prompt('Последний фильм?'),
//       d = prompt('Оценка?');

//  personalMovieDB.movies[a] = b;

//  personalMovieDB.movies[c] = d;

//  if (4 == 9) {
//      console.log('Ok!');
//  } else {
//      console.log('Error');
//  }


// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('mnogo');
// }else {
//     ('ok');
// }
// (num === 50) ? console.log('ok') : console.log('error');



// switch (num) {
//     case 49:
//         console.log('no');
//         break;
//     case 100: 
//         console.log('no');
//         break;
//     default:
//         console.log('so bad man, so bad');
//         break;

// }


// while (num <= 55) {
//     console.log(num);
//     num++;
// };
// // do {
//     console.log(num);
//     num++;
// }
// while(num < 55);
// let num = 50;
// for (let i = 1; i < 8; i++) {
    // console.log(num);
    // num++;
// }
// for (let i = 1; i < 10; i++) {
//     if(i === 6) {
//         continue;
        
//     }
//     console.log(i)

// }
;
