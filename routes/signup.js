const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { loginUser } = require('../auth');

const router = express.Router();

//user validators
const userValidators = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an email.')
        .isLength({ max: 100 })
        .withMessage('Email must not exceed 100 characters.')
        .isEmail()
        .withMessage('Please provide a valid email address.')
        // unique email w/ message "Email is already taken"
        ,
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
        }),
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
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {

        const hashedPassword = await bcrypt.hash(password, 10);
        user.hashedPassword = hashedPassword;
        await user.save();
        // console.log(user)
        await db.Vault.create({
            name: 'My Vault',
            userId: user.id
        })
        loginUser(req, res, user);
        res.redirect('/');

    } else {

        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('signup', {
            title: 'Sign Up',
            user,
            errors,
            token: req.csrfToken()
        });
    }
}));

module.exports = router;
