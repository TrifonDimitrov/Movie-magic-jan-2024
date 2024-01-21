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

exports.getOne = (movieId) => {
    const movie = movies.find(movie => movie._id == movieId);

    return movie;
};

exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
};