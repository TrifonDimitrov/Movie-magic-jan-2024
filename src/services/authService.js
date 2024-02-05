const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const {SECRET} = require('../config/configSecret');


// create a new user in the database 
exports.register = (userData) => User.create(userData);


exports.login = async (email, password) => {
    // Find the user from DB with the given email
    const user = await User.findOne({email});

    // Check if user exists
    if (!user) {
        throw new Error('Canot find email or password');
    };

    // Check if the password is correct
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Canot find email or password');
    };

    // Generate jwt token

    const payload = {
        userId: user._id,
        email: user.email
    };

    const token = await jwt.sign(payload, SECRET, {expiresIn: '2h'});

    return token;
  

}
