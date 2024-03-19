const model = require('./model');

// Insert Document
exports.addUser = async(req, res) => {
    try {
        const doc = {
            name: req.body.name,
            studentID: req.body.studentID,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        };
        const result = await model.User.insertOne(doc);

        console.log("User has been added.");
        res.json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.addProduct = async(req, res) => {
    try {
        const doc = {
            sold: req.body.sold,
            date: req.body.date,
            title: req.body.title,
            price: req.body.price,
            location: req.body.location,
            description: req.body.description,
            image: req.body.image
        };
        const result = await model.Product.insertOne(doc);

        console.log("Product has been added.");
        res.json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.addCategory = async(req, res) => {
    try {
        const doc = {
            category: req.body.category,
            productID: req.body.productID
        };

        const result = await model.Category.insertOne(doc);

        console.log("Category has been added.");
        res.json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.addSeller = async(req, res) => {
    try {
        const doc = {
            userID: req.body.userID,
            productID: req.body.productID
        };

        const result = await model.Seller.insertOne(doc);

        console.log("Seller has been added.");
        res.json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.addBuyer = async(req, res) => {
    try {
        const doc = {
            userID: req.body.userID,
            productID: req.body.productID
        };

        const result = await model.Buyer.insertOne(doc);

        console.log("Buyer has been added.");
        res.json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.addPurchase = async(req, res) => {
    try {
        const doc = {
            productID: req.body.productID,
            sellerID: req.body.sellerID,
            buyerID: req.body.buyerID
        };

        const result = await model.Purchase.insertOne(doc);

        console.log("Purchase has been added.");
        res.json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}
