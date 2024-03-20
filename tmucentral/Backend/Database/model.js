const {Schema, model} = require('mongoose');

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    name: String,
    studentID: Number,
    username: String,
    password: String,
    email: String
});

const productSchema = new Schema({
    sold: Boolean,
    datePosted: Date,
    title: String,
    price: Number,
    location: String,
    category: String,
    description: String,
    image: String
});

const sellerSchema = new Schema({
    userID: ObjectId,
    productID: ObjectId
});

const buyerSchema = new Schema({
    userID: ObjectId,
    productID: ObjectId
});

const transactionSchema = new Schema({
    productID: ObjectId,
    sellerID: ObjectId,
    buyerID: ObjectId,
    datePurchased: Date
});

const User = model('User', userSchema);
const Product = model('Product', productSchema);
const Seller = model('Seller', sellerSchema);
const Buyer = model('Buyer', buyerSchema);
const Transaction = model('Transaction', transactionSchema);

module.exports = {User, Product, Seller, Buyer, Transaction}
