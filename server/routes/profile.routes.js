const router = require("express").Router();
const User = require('./../models/User.model')
const Team = require('./../models/Team.model')

/**
 * req.query
 * path: "/" url: "/?name=teo" "?name=yuki"¨
 * req.params
 * path: "/:id" url: "/5324sd1341"
 * req.body
 * da igual el path pero tiene que ser post
 */

router.get('/:id', (req, res) => {
    
    User
        .findById(req.params.id)
        .then((profile) => res.json({ code: 200, profile }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching profile', err }))
})

router.put('/:id', (req, res) => {

    const { id } = req.params
    const { name, lastname, password, nick, position, teams, picture, description } = req.body

    User
        .findByIdAndUpdate(id, { name, lastname, password, nick, position, teams, picture, description })
        .then((profile) => res.json({ code: 200, profile }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI profile', err }))
})


module.exports = router;