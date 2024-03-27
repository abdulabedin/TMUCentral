const model = require('./model');

exports.getReview = async(req, res) => {
    try{
        const result = await model.Review.find();
        if(result === 0){
            res.status(404).send({'error': 'No results returned'})
        }
        else {
            res.status(200).send({'Review': result});
        }
    }
    catch(err){
        res.status(500).send({'error': err.message});
    }
}

exports.postReview = async(req, res) => {
    try{
        const review = new model.Review(req.body);
        await review.save();
        res.status(201).send({'Reviews': review});
    }
    catch(err) {
        res.status(500).send({'error': err.message});
    }
}

exports.patchReview = async(req, res) => {
    try{
        const reviewID = req.params.id;
        const result = await model.Review.findOneAndUpdate({_id: reviewID}, req.body, {new: true});
        console.log(result);
        res.status(201).send({'Reviews': result});
    }
    catch(err) {
        res.status(500).send({'error': err.message});
    }
}
