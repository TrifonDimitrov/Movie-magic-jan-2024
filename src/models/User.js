const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,

    },
    password: {
        type: String,
        required: true,
    }

});

// Hash the password before saving the user to the database

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

userSchema.virtual('rePassword')
    .set(function (value) {
        if (this.password !== value) {
            throw new Error('Password don\'t match');
        }
    });

const User = model('User', userSchema);

module.exports = User;  // export the model to be used in other files