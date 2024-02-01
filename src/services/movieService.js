const Movie = require('../models/Movie');
const Cast = require('../models/Cast');

exports.getAll = () => Movie.find();


exports.search = async (title, genre, year) => {
    let result = await Movie.find().lean();

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

exports.getOne = (movieId) => Movie.findById(movieId);

exports.create = (movieData) => Movie.create(movieData);

exports.attachCast = async (movieId, castId) => {
    const movie = await this.getOne(movieId);

    movie.casts.push(castId);

    return movie.save();

};
// return Movie.findByIdAndUpdate(movieId, { $addToSet: { cast: castId } })





