const model = require('./model');

findFunction = async(req, res, input_model) => {
    try {
        const query = await req.body;
        const result = await input_model.find(query);
        res.status(201).json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.getUser = async(req, res) => {
    // User Validation code here...
    findFunction(req, res, model.User);
}

exports.getProduct = async(req, res) => {
    // User Validation code here...
    findFunction(req, res, model.Product);
}

exports.getSeller = async(req, res) => {
    findFunction(req, res, model.Seller);
}

exports.getBuyer = async(req, res) => {
    findFunction(req, res, model.Buyer);
}

exports.getTransaction = async(req, res) => {
    findFunction(req, res, model.Transaction);
}
