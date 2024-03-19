const model = require('./model');

exports.deleteUser = async(req, res) => {
    try {
        const result = await model.User.deleteOne(req.body.id);
        res.json(result);
        console.log("User has been deleted.");
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.deleteProduct = async(req, res) => {
    try {
        const result = await model.Product.deleteOne(req.body.id);
        res.json(result);
        console.log("Product has been deleted.");
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.deleteCategory = async(req, res) => {
    try {
        const result = await model.Category.deleteOne(req.body.id);
        res.json(result);
        console.log("Category has been deleted.");
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.deleteSeller = async(req, res) => {
    try {
        const result = await model.Seller.deleteOne(req.body.id);
        res.json(result);
        console.log("Seller has been deleted.");
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.deleteBuyer = async(req, res) => {
    try {
        const result = await model.Buyer.deleteOne(req.body.id);
        res.json(result);
        console.log("Buyer has been deleted.");
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.deletePurchase = async(req, res) => {
    try {
        const result = await model.Purchase.deleteOne(req.body.id);
        res.json(result);
        console.log("Purchase has been deleted.");
    } catch(err) {
        res.status(500).send(err);
    }
}
