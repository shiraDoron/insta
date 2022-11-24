var express = require('express');
var userController = require('../controllers/usersController');
var router = express.Router();

router.get("/", userController.getAllUsers);

router.post("/login", async function (req, res, next) {
    res.json(await userController.login({ ...req.body }));
});

module.exports = router;