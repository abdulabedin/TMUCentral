const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const mongoDB_url = "mongodb://localhost:27017/testingDB"; // Replace for env variable
        mongoose.connect(mongoDB_url);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = connectDB;
