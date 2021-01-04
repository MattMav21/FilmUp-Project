var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validators');
const db = require('../db/models');

//user validators


router.get('/', csrfProtection, (req, res) => {
    //GOAL: renders the signup page.
    res.render('signup', { title: 'Sign Up', token: req.csrfToken() });
});

router.post('/', csrfProtection, asyncHandler(async(req, res) => {
    //GOAL: Create new user into database.
    const { email, firstName, lastName, password } = req.body;
    const user = db.User.build(
        email,
        firstName,
        lastName,
        password,
    );
    await user.save();
}));

module.exports = router;