const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    }
});

module.exports = mongoose.model('Cart', cartSchema);