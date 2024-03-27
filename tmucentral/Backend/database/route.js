const router = require('express').Router();
const _user = require('./api_endpoints/user');
const _post = require('./api_endpoints/post');
const _review = require('./api_endpoints/review');

router
.get('/users', _user.getUsers)
.post('/users', _user.postUser)
.get('/users/id/:id', _user.getUserID)
.put('/users/id/:id', _user.getUserID)
.patch('/users/id/:id', _user.patchUser)
.delete('/users/id/:id', _user.deleteUser)

.get('/posts', _post.getPosts)
.post('/posts', _post.postPosts)
.patch('/posts/posts/:id', _post.patchPosts)
.get('/products/tags/:tags', _post.getPostTags)

module.exports = router;
