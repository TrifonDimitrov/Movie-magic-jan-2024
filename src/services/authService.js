const User = require("../models/User");

exports.register = (userData) => User.create(userData); // create a new user in the database 
