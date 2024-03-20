const {Schema, model} = require('mongoose');

const ObjectId = Schema.Types.ObjectId;

const User = model('User', new Schema({
    name: String,
    studentID: Number,
    username: String,
    password: String,
    email: String
}));

const Product = model('Product', new Schema({
    sold: Boolean,
    datePosted: Date,
    title: String,
    price: Number,
    location: String,
    category: String,
    description: String,
    image: String
}));

const Seller = model('Seller', new Schema({
    userID: ObjectId,
    productID: ObjectId
}));

const Buyer = model('Buyer', new Schema({
    userID: ObjectId,
    productID: ObjectId
}));

const Transaction = model('Transaction', new Schema({
    productID: ObjectId,
    sellerID: ObjectId,
    buyerID: ObjectId,
    datePurchased: Date
}));

module.exports = {User, Product, Seller, Buyer, Transaction}
