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

exports.create = (movieData) => {
    movieData._Id = movies[movies.length - 1]._Id + 1;
    movies.push(movieData);
};