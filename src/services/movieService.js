const Movie = require('../models/Movie');

const movies = [{
    _id: 1,
    title: 'Matrix',
    genre: 'action',
    director: 'Myrphy',
    year: '2133',
    imageURL: 'frfr',
    rating: '4',
    description: 'fffffffffffffffffffffffffffffffffffffffff'
}];

exports.getAll = () => {
    return movies.slice();
};

exports.search = (title, genre, year) => {

    let result = movies.slice();

    if (title) {
        result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (genre) {
        result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    if (year) {
        result = result.filter(movie => movie.year === year);
    }

    return result;
};

exports.getOne = (movieId) => {
    const movie = movies.find(movie => movie._id == movieId);

    return movie;
};

exports.create = async (movieData) => {

   const result = await Movie.create(movieData);

   return result;

};

