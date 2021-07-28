const router = require("express").Router();
const User = require('./../models/User.model')
const Team = require('./../models/Team.model')

router.get('/:id', (req, res) => {
    
    User
        .findById(req.params.id)
        .then((profile) => res.json({ code: 200, profile }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching profile', err }))
})

router.put('/:id', (req, res) => {
console.log(req.body)
    const { id } = req.params
    const { name, lastname, nick, position, picture, description } = req.body

    User
        .findByIdAndUpdate(id, { name, lastname, nick, position, picture, description })
        .then((profile) => res.json({ code: 200, profile }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI profile', err }))
})


module.exports = router;