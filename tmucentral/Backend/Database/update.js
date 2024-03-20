const model = require('./model');

updateFunction = async(req, res, input_model) => {
    try {
        const query = await req.body.query;
        const data = await req.body.data;
        const result = await input_model.updateMany(query, data);
        res.status(201).json(result);

    } catch(err) {
        res.status(500).send(err);
    }
}

exports.updateUser = async(req, res) => {
    // User Validation code here...
    updateFunction(req, res, model.User);
}

exports.updateProduct = async(req, res) => {
    // User Validation code here...
    updateFunction(req, res, model.Product);
}

exports.updateSeller = async(req, res) => {
    updateFunction(req, res, model.Seller);
}

exports.updateBuyer = async(req, res) => {
    updateFunction(req, res, model.Buyer);
}

exports.updateTransaction = async(req, res) => {
    updateFunction(req, res, model.Transaction);
}
