const router = require("express").Router();
const Match = require('./../models/Match.model')
const Team = require('./../models/Team.model')
const User = require('./../models/User.model')

router.get("/", (req, res, next) => {
    Match
        .find()
        .then((match) => res.json({ code: 200, match }))
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err }))
})

module.exports = router;