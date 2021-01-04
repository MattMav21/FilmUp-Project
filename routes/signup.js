var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

//user validators
const userValidators = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an email.')
        .isLength({ max: 100 })
        .withMessage('Email must not exceed 100 characters.')
        .isEmail()
        .withMessage('Please provide a valid email address.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
        // Special Characters
        //.matches(characters users must include)
        //.withMessage('Password must contain ???')
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please confirm your password.')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('These passwords do not match!');
            }
            return true;
        })
    ,
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for First Name')
        .isLength({ max: 50 })
        .withMessage('First Name must not be more than 50 characters long'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Last Name')
        .isLength({ max: 50 })
        .withMessage('Last Name must not be more than 50 characters long'),
];


router.get('/', csrfProtection, (req, res) => {
    //GOAL: renders the signup page.
    const user = db.User.build();
    res.render('signup', { title: 'Sign Up', token: req.csrfToken() });
});

router.post('/', csrfProtection, userValidators, asyncHandler(async(req, res) => {
    //GOAL: Create new user into database.
    const { email, firstName, lastName, password } = req.body;
    const user = db.User.build({
        email,
        firstName,
        lastName,
        hashedPassword: password,
    });
    await user.save();
    res.redirect('/');
}));

module.exports = router;