const router = require('express').Router();
const _insert = require('./insert');
const _delete = require('./delete');
const _update = require('./update');
const _query = require('./query');

router
    .post('/add-user', _insert.addUser)
    .post('/add-product', _insert.addProduct)
    .post('/add-seller', _insert.addSeller)
    .post('/add-buyer', _insert.addBuyer)
    .post('/add-transaction', _insert.addTransaction)

    .post('/delete-user', _delete.deleteUser)
    .post('/delete-product', _delete.deleteProduct)
    .post('/delete-seller', _delete.deleteSeller)
    .post('/delete-buyer', _delete.deleteBuyer)
    .post('/delete-transaction', _delete.deleteTransaction)

    .post('/update-user', _update.updateUser)
    .post('/update-product', _update.updateProduct)
    .post('/update-seller', _update.updateSeller)
    .post('/update-buyer', _update.updateBuyer)
    .post('/update-transaction', _update.updateTransaction)

    .get('/get-user', _query.getUser)
    .get('/get-product', _query.getProduct)
    .get('/get-seller', _query.getSeller)
    .get('/get-buyer', _query.getBuyer)
    .get('/get-transaction', _query.getTransaction)

module.exports = router;
