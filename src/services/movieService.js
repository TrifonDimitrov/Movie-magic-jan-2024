const movies = [{
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
    console.log(movieData);
    movies.push(movieData);
};