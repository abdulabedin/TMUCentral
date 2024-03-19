const model = require('./model');

// {DELETE AFTER TESTING} For Testing Purposes - Clear all database documents
exports.clearDB = async(req, res) => {
    try {
        let result;

        result = await model.User.deleteMany({});
        console.log("All 'User' documents have been deleted.");
        res.json(result);

        result = await model.Product.deleteMany({});
        console.log("All 'Product' documents have been deleted.");
        res.json(result);

        result = await model.Category.deleteMany({});
        console.log("All 'Category' documents have been deleted.");
        res.json(result);

        result = await model.Seller.deleteMany({});
        console.log("All 'Seller' documents have been deleted.");
        res.json(result);

        result = await model.Buyer.deleteMany({});
        console.log("All 'Buyer' documents have been deleted.");
        res.json(result);

        result = await model.Purchase.deleteMany({});
        console.log("All 'Purchase' documents have been deleted.");
        res.json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}
