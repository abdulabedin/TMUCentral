const express = require('express');
const router = express.Router();


// Export router to other files
module.exports = router;

// Load the models
const Products = require('../models/products');

// Retreive all products
router.get('/products', async (req, res) => {
    try{
        const result = await Products.find();
        if(result === 0){
            res.status(404).send({'error': 'No results returned'})
        }
        else {
            res.status(200).send({'Products': result});
        }
    }
    catch(err){
        res.status(500).send({'error': err.message});
    }
});


// Put product into DB
router.post('/products', async (req, res) => {
    try{
        const product = new Products(req.body);
        await product.save();
        res.status(201).send({'Products': product});
    }
    catch(err) {
        res.status(500).send({'error': err.message});
    }
});

// Update single or multiple fields associated with product based on its ID
router.patch('/products/product/:id', async (req, res) => {
    try{
        const prodID = req.params.id;
        const result = await Products.findOneAndUpdate({_id: prodID}, req.body, {new: true});
        console.log(result);
        res.status(201).send({'Product': result});
    }
    catch(err) {
        res.status(500).send({'error': err.message});
    }
});

// Retrieve all products based on a series of tags
// sample endpoint: '/api/products/tags/tag1,tag2,...,tagn
router.get('/products/tags/:tags', async (req, res) => {
    try {
        const prodTags = req.params.tags.split(',');
        console.log("Tags:", prodTags); // Log prodTags to check its format
        const result = await Products.find({ "tags.tag": { $in: prodTags } });
        console.log("Result:", result); // Log the result to see what's returned
        res.status(200).send({ 'Product': result });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).send({ 'error': err.message });
    }
});

