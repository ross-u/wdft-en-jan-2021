// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArr) {
  const allDirectors = moviesArr.map((movie) => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  const spilverMovies = arr.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spilverMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const sum = movies.reduce((accumulator, currentValue) => {
    if (!currentValue.rate) {
      return accumulator + 0;
    } else {
      return accumulator + currentValue.rate;
    }
  }, 0);
  const average = +(sum / movies.length).toFixed(2);
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramaMovies = [];
  dramaMovies = array.filter(function (el) {
    if (el.genre.includes("Drama")) {
      return el.rate;
    }
  });
  return ratesAverage(dramaMovies);
}
console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const otherMovies = array.map((element) => element);
  otherMovies.sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return otherMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  const otherMovies = array.map((element) => element.title);

  const sortedArr = otherMovies.sort(function (a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });

  const arrCc = sortedArr.slice(0, 20);

  return arrCc;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const updatedMovies = moviesArray.map((movie) => {
    const movieCopy = { ...movie };

    movieCopy.duration = convertDuration(movie.duration);

    return movieCopy;
  });

  return updatedMovies;
}

function convertDuration(durationStr) {
  const timeArr = durationStr.split(" "); // "2h 22min"   ==>  ['2h', '22min']

  const minutes = timeArr.reduce((totalMinutes, el) => {
    //  ==> 142
    if (el.includes("h")) {
      return totalMinutes + convertHours(el);
    } else {
      return totalMinutes + convertMinutes(el);
    }
  }, 0);

  return minutes;
}

function convertHours(el) {
  const hourArr = el.split("h"); //   '2h'  ==>    ['2', 'h']
  const hour = Number(hourArr[0]);

  const convertedMinutes = hour * 60;
  return convertedMinutes;
}

function convertMinutes(el) {
  const minArr = el.split("min"); //   '22min'  ==>  ['22'];
  const convertedMinutes = Number(minArr[0]);

  return convertedMinutes;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

// Create a dictionary - create an object and create it's properties using object
// bracket notation

function bestYearAvg(moviesArr) {
  const dict = {};

  moviesArr.forEach((movie) => {
    const yearArr = dict[movie.year]; // dict['1994']   dict.1994

    if (!yearArr) {
      //  dict.1994  =  [   {}    ]
      //  dict['1994']  =  [   {}    ]
      dict[movie.year] = [movie];
    } else {
      dict[movie.year].push(movie);
    }
  });

  console.log("dict", dict);
}
