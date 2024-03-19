const model = require('./model');

// Get all products
exports.getProduct = async(req, res) => {
    try {
        const result = await model.Product.find({});
        res.json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}
