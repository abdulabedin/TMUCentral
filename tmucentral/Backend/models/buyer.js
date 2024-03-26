const mongoose = require('mongoose');

module.exports = mongoose.model('Buyers', buyerSchema);

const buyerSchema = new mongoose.Schema({
    buyerID: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
    }
});