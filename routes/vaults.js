var express = require('express');
var router = express.Router();
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
    // const vaults = await db.Vault.findByPk(req.params.id)
    // Need seed data to implement vaults on the page
    // We will then want to render the users vaults on the page
    // res.render('vaults', { vaults })
    res.render('vaults')
}))

router.get('/:id', asyncHandler(async (req, res) => {
    // We want to access a specific vault
    // Likely will need to change this to match the specific vault
    // const vault = await db.Vault.findByPk(req.params.id)
    // Then render that specific vault on the page
    // res.render('vault', { vault })
    res.render('vault')
}))

router.post('/', asyncHandler(async (req, res) => {
    // We want a route for when a user creates a vault
    // We will want to check how many vaults the user has. 
    // If more than ten, they can no longer create new vaults.
    const user = await db.User.findByPk(req.params.id)
    // TODO: Find a way to count how many vaults are associated with a user
    const vault = await db.Vault.build({
        name: req.name
    })
    await vault.save()
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    // We want to target the specific vault
    const vault = await db.Vault.findByPk(req.params.id)
    // Remove the vault from the database
    Vault.remove(vault)
    // Redirect the user back to the vaults page
    res.redirect('vaults')
}))

module.exports = router;