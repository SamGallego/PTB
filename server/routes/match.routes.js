const router = require("express").Router()
const Match = require('./../models/Match.model')
const Team = require('./../models/Team.model')
const User = require('./../models/User.model')

router.get("/", (req, res, next) =>
    res.json({ message: "match" }))

router.post('/create', (req, res) => {

    const { name, lat, lng, date, description, owner } = req.body

    const score = {
        teamA: 0,
        teamB: 0
    }
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
    const capacity = 14
    const players = {
        A: [],
        B: []
    }

    Match
        .create({ name, location, score, date, description, playersA: players.A, playersB: players.B, capacity, owner })
        .then((match) => res.json({ code: 200, message: 'match created', match }))
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err }))

})


router.get("/list", (req, res, next) => {

    Match
        .find()
        .then((match) => res.json({ code: 200, match }))
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err }))

})

router.get("/details/:id", (req, res, next) => {

    Match
        .findById(req.params.id)
        .populate("teamA teamB playersA playersB")
        .then((match) => res.json({ code: 200, match }))
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err }))

})

router.put('/details/:id', (req, res) => {

    const { id } = req.params
    const { name, lat, lng, score, date, description, playersA, playersB, capacity } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Match
        .findByIdAndUpdate(id, { name, location, score, date, description, playersA, playersB, capacity })
        .then((match) => res.json({ code: 200, match }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI league', err }))
})

router.put('/details/:id/joinA', (req, res) => {

    const { id } = req.params
    const { userId } = req.body

    Match
        .findByIdAndUpdate(id, { $push: { playersA: userId } })
        .populate('playersA')
        .then((match) => res.json({ code: 200, match }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI league', err }))
})

router.put('/details/:id/joinB', (req, res) => {

    const { id } = req.params
    const { userId } = req.body

    Match
        .findByIdAndUpdate(id, { $push: { playersB: userId } })
        .populate('playersB')
        .then((match) => res.json({ code: 200, match }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI league', err }))
})



//Match.findByIdAndUpdate(id, {$push: {campo: valor}})
//                             $pull: 
router.delete('/details/:id', (req, res) => {
    const { id } = req.params

    Match
        .findByIdAndDelete(id)
        .then(() => res.json({}))
        .catch(err => console.log(err))
})



module.exports = router;