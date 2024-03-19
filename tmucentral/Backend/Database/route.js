const router = require('express').Router();
const _insert = require('./insert');
const _delete = require('./delete');
const _query = require('./query');

router
    .post('/add-user', _insert.addUser)
    .post('/add-product', _insert.addProduct)
    .post('/add-category', _insert.addCategory)
    .post('/add-seller', _insert.addSeller)
    .post('/add-buyer', _insert.addBuyer)
    .post('/add-purchase', _insert.addPurchase)

    .post('/delete-user', _delete.deleteUser)
    .post('/delete-product', _delete.deleteProduct)
    .post('/delete-category', _delete.deleteCategory)
    .post('/delete-seller', _delete.deleteSeller)
    .post('/delete-buyer', _delete.deleteBuyer)
    .post('/delete-purchase', _delete.deletePurchase)

    .get('/get-product', _query.getProduct)

module.exports = router;
