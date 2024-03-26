const mongoose = require('mongoose');

const Users = require('./users');


const productSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectID,     // seller will store the id from User schema
        ref: 'Users',                             // foreign key to User schema
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: false,
    },
    quantity: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    sold: {
        type: Boolean,
        required: true,
    },
    // image: {
    //     data: Buffer,         // store image as binary data
    //     contentType: String,
    // },
    tags: [
        {
            tag: String
        }
    ]   
});

module.exports = mongoose.model('Products', productSchema);