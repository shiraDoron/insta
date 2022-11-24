var express = require('express');
var postsController = require('../controllers/postsController');
var router = express.Router();


router.get("/", postsController.getAllPosts);

router.post('/addPost', async function (req, res, next) {
    res.json(await postsController.addPost({ ...req.body }));
});
router.get('/myPost', async function (req, res, next) {
    res.json(await postsController.getMyPost(req.query.userID));
});
router.post('/addLike', async function (req, res, next) {
    res.json(await postsController.addLike({ ...req.body }));
});
router.post('/removeLike', async function (req, res, next) {
    res.json(await postsController.removeLike({ ...req.body }));
});
router.post('/likePost', async function (req, res, next) {
    res.json(await postsController.IsLikedThePost({ ...req.body }));
});
module.exports = router;