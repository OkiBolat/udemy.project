"use strict";
const numberOfFilms = prompt('Сколько фильмов вы посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}
// const a = prompt('Последний фильм?'),
//       b = prompt('Оценка?'),
//       c = prompt('Последний фильм?'),
//       d = prompt('Оценка?');

//  personalMovieDB.movies[a] = b;

//  personalMovieDB.movies[c] = d;


for (let i = 0; i < 2; i++) {
    const a = prompt('Последний фильм?'),
          b = prompt('Оценка?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
    }else {
        console.log('error');
        i--;
    }

   
}
if (personalMovieDB.count < 10) {
    console.log("not bad, not bad")

}else if (personalMovieDB >= 10 && personalMovieDB <= 30){
    console.log('you are good man')

}else if(personalMovieDB >= 30) {
    console.log('you kinoman')
}else {
    console.log('error')
}

console.log(personalMovieDB)

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

