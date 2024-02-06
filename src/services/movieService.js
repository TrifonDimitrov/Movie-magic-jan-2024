const Movie = require('../models/Movie');
const Cast = require('../models/cast');

exports.getAll = () => Movie.find();


exports.search = (title, genre, year) => {
    let query = {};

    if (title) {
       query.title = new RegExp(title, 'i');
    }

    if (genre) {
        query.genre = genre.toLowerCase();
    }

    if (year) {
        query.year = year;
    }

    return Movie.find(query);
};

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts'); // populate - vzemane na vsichki danni ot drugata tablica

exports.create = (movieData) => Movie.create(movieData);

exports.attachCast = async (movieId, castId) => {
    const movie = await this.getOne(movieId);

    movie.casts.push(castId);

    return movie.save();

};

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);





