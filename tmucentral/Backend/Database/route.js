const router = require('express').Router();
const _insert = require('./insert');
const _delete = require('./delete');
const _query = require('./query');

router
    .get('/getProduct', _query.getProduct)

module.exports = router;
