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
    date: Date,
    title: String,
    price: String,
    location: String,
    description: String,
    image: String
});

const categorySchema = new Schema({
    category: String,
    productID: ObjectId
});

const sellerSchema = new Schema({
    userID: ObjectId,
    productID: ObjectId
});

const buyerSchema = new Schema({
    userID: ObjectId,
    productID: ObjectId
});

const purchaseSchema = new Schema({
    productID: ObjectId,
    sellerID: ObjectId,
    buyerID: ObjectId
});

// Construct Models
const User = model('User', userSchema);
const Product = model('Product', productSchema);
const Category = model('Category', categorySchema);
const Seller = model('Seller', sellerSchema);
const Buyer = model('Buyer', buyerSchema);
const Purchase = model('Purchase', purchaseSchema);

module.exports = {User, Product, Category, Seller, Buyer, Purchase}
