const router = require('express').Router();
const _user = require('./api_endpoints/user');
const _ad = require('./api_endpoints/ad');
const _review = require('./api_endpoints/review');

router
    .get('/users', _user.getUsers)
    .post('/users', _user.postUser)
    .get('/users/id/:id', _user.getUserID)
    .put('/users/id/:id', _user.putUserID)
    .patch('/users/id/:id', _user.patchUser)
    .delete('/users/id/:id', _user.deleteUser)

    .get('/ads', _ad.getAds)
    .post('/ads', _ad.postAds)
    .patch('/ads/ads/:id', _ad.patchAds)
    .get('/ads/tags/:tags', _ad.getAdTags)

    .get('/reviews', _review.getReview)
    .post('/reviews', _review.postReview)
    .patch('/reviews/reviews/:id', _review.patchReview)

module.exports = router;
