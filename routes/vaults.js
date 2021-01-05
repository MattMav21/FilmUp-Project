var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

// TODO: Ensure the middleware can check is the session/user is valid.
// This middleware will check if a user is logged in. If so, nothing will happen.
// If not, then they will be alerted they need to login/sign up and be redirected.
// const isUser = (req, res, next) => {
//     if(!req.User.email) {
//         alert('Please login or sign up!')
//         res.redirect('/signup')
//     }
//     next()
// }

router.get('/', asyncHandler(async (req, res) => {
    // Since this page displays all of the vaults associated with the user
    // We want to display all vaults associated with their id
    // This id may need to be found on the session token we will implement
    // const vaults = await Vault.findByPk(req.params.id)
    // Need seed data to implement vaults on the page
    // We will then want to render the users vaults on the page
    // res.render('vaults', { vaults })
    res.render('vaults')
}))

module.exports = router;