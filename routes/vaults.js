const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils');
const { requireAuth } = require('../auth')

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

router.get('/', requireAuth, asyncHandler(async (req, res) => {
    // Since this page displays all of the vaults associated with the user
    // We want to display all vaults associated with their id
    // This id may need to be found on the session token we will implement
    const vaults = await db.Vault.findAll({ where: { userId: req.session.auth.userId } })
    // Need seed data to implement vaults on the page
    // We will then want to render the users vaults on the page
    res.render('vaults', { vaults })
    // res.render('vaults')
}))

router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
    // We want to access a specific vault
    // Likely will need to change this to match the specific vault
    const vault = await db.Vault.findByPk(req.params.id)
    // Then render that specific vault on the page
    // res.render('vault', { vault })
    res.render('vault', { vault })
}))

router.post('/', requireAuth, asyncHandler(async (req, res) => {
    // We want a route for when a user creates a vault
    // We will want to check how many vaults the user has. 
    // If more than ten, they can no longer create new vaults.
    const user = await db.User.findOne({ where: { id: req.session.auth.userId } });
    // TODO: Find a way to count how many vaults are associated with a user
    const vault = db.Vault.build({
        name: req.body.name,
        userId: user.id
    })
    await vault.save()
    res.redirect('/vaults')
}))

// router.post('/:id/delete', requireAuth, asyncHandler(async (req, res) => {
//     // We want to target the specific vault
//     // const vault = await db.Vault.findByPk(req.params.id)
//     const vault = await db.Vault.findOne({
//         where: {
//             id: 3
//         },
//     })
//     // console.log("this is the vault we are logging", vault)
//     // Remove the vault from the database
//     await vault.destroy()
//     // Redirect the user back to the vaults page
//     res.redirect('/vaults')
// }))

router.post(/\/\d+/, requireAuth, asyncHandler(async (req, res) => {
    const id = req.path.split('/')[1]
    // const vault = await db.Vault.findByPk(id)
        const vault = await db.Vault.findOne({
        where: {
            id: id
        },
    })
    await vault.destroy()
    res.redirect('/vaults')
}))
module.exports = router;