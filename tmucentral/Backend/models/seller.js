const mongoose = require('mongoose');

module.exports = mongoose.model('Sellers', sellerSchema);

const sellerSchema = new mongoose.Schema({
    sellerID: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    }
});