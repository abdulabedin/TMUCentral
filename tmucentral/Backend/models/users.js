const mongoose = require('mongoose');

// Create new schema for User collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,                              // Constrained field/attribute to be of type String
        required: true,                            // required enforces the field cannot be NULL          
    },          
    studentID: {
        type: Number,                              // Constrained field/attribute to be of type Number
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    }, 
    // test: [                                 // nested objects
    //     {
    //         field1: String,
    //         field2: String

    //     }
    // ]
});

// Lets us to import model into other app files
module.exports = mongoose.model('Users', userSchema); 