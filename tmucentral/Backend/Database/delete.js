const model = require('./model');

deleteFunction = async(req, res, input_model) => {
    try {
        const result = await input_model.deleteOne(req.body.id);
        res.status(201).json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.deleteUser = async(req, res) => {
    deleteFunction(req, res, model.User);
}

exports.deleteProduct = async(req, res) => {
    deleteFunction(req, res, model.Product);
}

exports.deleteSeller = async(req, res) => {
    deleteFunction(req, res, model.Seller);
}

exports.deleteBuyer = async(req, res) => {
    deleteFunction(req, res, model.Buyer);
}

exports.deleteTransaction = async(req, res) => {
    deleteFunction(req, res, model.Transaction);
}
