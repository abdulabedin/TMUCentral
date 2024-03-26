const express = require('express');
const router = express.Router();


// Export router to other files
module.exports = router;

// Load the models
const Cart = require('../models/cart');
const Users = require('../models/users');

// Retreive all carts
router.get('/cart', async (req, res) => {
    try{
        const result = await Cart.find();
        if(result.length === 0){
            res.status(404).send({'error': 'No results returned'})
        }
        else {
            res.status(200).send({'Cart': result});
        }
    }
    catch(err) {
        res.status(500).send({'error': err.message});
    }
});

// Add item to user's cart
router.post('/cart', async (req, res) => {
    try{
        const cart = new Cart(req.body);
        await cart.save();
        res.status(201).send({'Cart': cart});
    }
    catch(err) {
        res.status(500).send({'error': err.message});
    }
});

// Get a single user's cart
router.get('/cart/getUserCart/:id', async (req, res) => {
    try{
        const userID = req.params.id;
        const result = await Cart.find({'userID': userID});
        if(!result) {
            res.status(404).send({'error': `Cart with user found with id ${userID} not found`});
        }
        else{
            const user = await Users.findById(userID);
            if(!user) {
                return res.status(404).send({ 'error': `User with ID ${userID} not found` });
            }
            res.status(200).send({ 'Cart': `${user.username}'s cart`, 'items': result });
        }
    }
    catch(err){
        res.status(500).send({'error': err.message});
    }
});

// Retreive one or many user carts
router.get('/cart/getAllCarts/:ids', async (req, res) => {
    try {
        const userIDs = req.params.ids.split(',');
        const cartsByUser = [];

        // Iterate over each userID using forEach
        await Promise.all(userIDs.map(async userID => {
            const carts = await Cart.find({ 'userID': userID });
            const user = await Users.findById(userID);
            cartsByUser.push({ userID: userID, userName: user.username, carts: carts });
        }));

        res.status(200).send({ 'Carts By User': cartsByUser });
    } catch (err) {
        res.status(500).send({ 'error': err.message });
    }
});