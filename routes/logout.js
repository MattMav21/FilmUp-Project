const express = require('express');
const router = express.Router();

const { loginUser, logoutUser } = require('../auth');

router.post('/', (req, res) => {
    console.log("clicked")
    logoutUser(req, res);
    res.redirect('/login');
});

module.exports = router;