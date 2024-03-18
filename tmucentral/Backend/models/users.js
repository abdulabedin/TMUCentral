const mongoose = require('mongoose');

// Create new schema for User collection
const userSchema = new mongoose.Schema({
    name: String,
    studentID: Number,
    username: String,
    password: String,
    email: String, 

});

// Lets us to import model into other app files
module.exports = mongoose.model('User', userSchema);