const model = require('./model');

insertFunction = async(req, res, input_model) => {
    try {
        const data = await req.body;
        const result = await input_model.create(data);
        res.status(201).json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.addUser = async(req, res) => {
    // User Validation code here...
    insertFunction(req, res, model.User);
}

exports.addProduct = async(req, res) => {
    // User Validation code here...
    insertFunction(req, res, model.Product);
}

exports.addSeller = async(req, res) => {
    insertFunction(req, res, model.Seller);
}

exports.addBuyer = async(req, res) => {
    insertFunction(req, res, model.Buyer);
}

exports.addTransaction = async(req, res) => {
    insertFunction(req, res, model.Transaction);
}
