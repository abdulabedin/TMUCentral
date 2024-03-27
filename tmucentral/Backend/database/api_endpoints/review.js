const model = require('./model');

exports.getReview = async(req, res) => {
    try {
        const query = await req.body;
        const result = await model.Review.find(query);
        res.status(200).send(result);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

exports.addReview = async(req, res) => {
    try {
        const data = await req.body;
        console.log(data);

        const result = new model.Review(data);
        await result.save();
        res.status(201).send(result);
    } catch(err) {
        res.status(400).send(err.message);
    }
}

exports.updateReview = async(req, res) => {
    try {
        const query = await req.body.query;
        const data = await req.body.data;
        const result = await model.Review.updateMany(query, data);
        res.status(201).json(result);

    } catch(err) {
        res.status(500).send(err);
    }
}

exports.deleteReview = async(req, res) => {
    try {
        const result = await model.Review.deleteOne(req.body.id);
        res.status(201).json(result);
    } catch(err) {
        res.status(500).send(err);
    }
}