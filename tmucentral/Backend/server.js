// This document is using Express to create an API specific for the app

const express = require('express');
const app = express();
const cors = require('cors');          // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. Make sure it is installed.
const mongoose = require('mongoose');  // Connect Mongoose to MongoDB

// If app not in production mode, then use the enviornment vars from the .env file
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 3001;
const CONNECTION = process.env.CONNECTION;

app.use(express.json()); // Middleware to parse JSON requests

app.use(cors()); 

/* -------------------- ADD CODE HERE ------------------------ */

// Load the models
const UserModel = require('./models/users');

// Instantiate new object for the UserModel Schema
const user = new UserModel({
    name: 'user1',
    studentID: 123456789,
    username: 'user1',
    password: 'user1pass',
    email: 'user1@torontomu.ca', 
});

user.save();

app.get('/api/user', (req, res) =>{
    try {
        res.send(user);
    }
    catch(err) {
        res.status(500).send(err);
    }
});





/* -------------------- END OF ADDING CODE HERE ------------------------ */

// Starting up of the DB from MongoDB Atlas
const startBackend = async() => {

    // await mongoose.connect('mongodb://127.0.0.1:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
    try{

        // Wait for mongoose to connect to the CPS630 DB created on Atlas
        await mongoose.connect(
            CONNECTION, 
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log('MongoDB connected successfully'))

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch(error) {
        console.error('Error connecting to MongoDB:', error.message);
    }

}

startBackend();
