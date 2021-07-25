const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('./../models/User.model')

// SignUp
router.get('/signup', (req, res) => {

  res.json({ message: "signup" })
})

router.post('/signup', (req, res) => {

    const { name, lastname, password, nick, position, picture, description } = req.body

    User
        .findOne({ name })
        .then(user => {

            if (user) {
                res.status(400).json({ code: 400, message: 'Username already exixts' })
                return
            }
            const bcryptSalt = 10
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)
            console.log(hashPass,'hashPass')

            User
                .create({ name, lastname, password: hashPass, nick, position, picture, description })
                .then(() => res.json({ code: 200, message: 'User created' }))
                .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err }))
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})

// Login
router.post('/login', (req, res) => {

    const { name, password } = req.body

    User
        .findOne({ name })
        .then(user => {

            if (!user) {
                res.status(401).json({ code: 401, message: 'name not registered' })
                return
            }

            if (bcrypt.compareSync(password, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Incorect password' })
                return
            }

            req.session.currentUser = user
            res.json(req.session.currentUser)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => res.json({ mssage: 'Logout successful' }));
})

router.post('/isloggedin', (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

module.exports = router