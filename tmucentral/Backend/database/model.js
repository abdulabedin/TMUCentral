const {Schema, model} = require('mongoose');

const ObjectId = Schema.Types.ObjectId;
var Double = require("mongoose").Decimal128;

const User = model('User', new Schema({
    name: {type: String, required: true},
    studentID: {type: Number, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true}
}));

const Post = model('Post', new Schema({
    user: {type: ObjectId, required: true},
    postDate: {type: Date, required: true},
    title: {type: String, required: true},
    description: {type: String, required: false},
    price: {type: Double, required: false},
    quantity: {type: Number, required: true},
    location: {type: String, required: true},
    sold: {type: Boolean, required: true},
    //image: {type: String, required: false}, // Store as binary data
    category: {type: [
        "itemWanted", 
        "itemForSale", 
        "academicService"
    ], required: true},
    tags: [{tag: String}]  
}));

const Review = model('Review', new Schema({
    user: {type: ObjectId, required: true},
    Post: {type: ObjectId, required: true},
    reviewDate: {type: Date, required: true},
    description: {type: String, required: true}
}));

module.exports = {User, Post, Review}
