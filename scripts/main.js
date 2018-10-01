const movies = require('./data');
const createMovie = require('./template');

const moviesHTML = movies.map(createMovie).join('');
// const heading = document.querySelector('h1')
console.log(moviesHTML);
document.querySelector('tbody').innerHTML = moviesHTML;
