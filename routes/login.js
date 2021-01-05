const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { loginUser } = require('../auth');

const router = express.Router();

//login validators
const loginValidators = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
];

router.get('/', csrfProtection, (req, res) => {
    res.render('login', {
        title: 'Login',
        token: req.csrfToken(),
    });
});

router.post('/', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    let errors = [];
    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
        const user = await db.User.findOne({ where: { email } });

        if (user !== null) {
            const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

            if (passwordMatch) {

                loginUser(req, res, user);
                return res.redirect('/');
            }
        }

        errors.push('Your login was unsuccessful. Please try again.');

    } else {

        errors = validationErrors.array().map((error) => error.msg);
    }

    res.render('login', {
        title: 'Login',
        email,
        errors,
        token: req.csrfToken(),
    });
}));

module.exports = router;
