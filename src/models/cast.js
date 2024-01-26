const mongoose = require('mongoose');   

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
        max: 100,
    },
    born: {
        type: String,
        required: true,
    },
    nameInMovies: {
        type: String,
        required: true,
    },
    castImages: {
        type: String,
        required: true,
        validation: /^https?:\/\//,
    },
    
});

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;  // export the model to be used in other files