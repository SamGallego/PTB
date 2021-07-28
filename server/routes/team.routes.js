const router = require("express").Router()
const Team = require('./../models/Team.model')
const User = require('./../models/User.model')

router.get("/", (req, res, next) =>
    res.json({ message: "team" }))

router.post('/create', (req, res) => {

    const { name, picture, players, capacity, owner } = req.body


    Team
        .create({ name, picture, players, capacity, owner })
        .then(() => res.json({ code: 200, message: 'Team created' }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI team', err }))
})

router.get("/list", (req, res, next) => {

    Team
        .find()
        .then((team) => res.json({ code: 200, team }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI team', err }))

})

router.get("/details/:id", (req, res, next) => {

    Team
        .findById(req.params.id)
        // .populate('name')
        .then((team) => res.json({ code: 200, team }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI team', err }))

})

router.post('/details/:id', (req, res) => {

    const { id } = req.params
    const { name, picture, players, capacity } = req.body

    Team
        .findByIdAndUpdate(id, { name, picture, players, capacity })
        .then((team) => res.json({ code: 200, team }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI team', err }))
})

router.delete('/details/:id', (req, res) => {
    const {
        id
    } = req.params

    Team
        .findByIdAndDelete(id)
        .then(() => res.json({}))
        .catch(err => console.log(err))
})

router.put('/details/:id/join', (req, res) => {

    const { id } = req.params
    const { userId } = req.body

    Team
        .findByIdAndUpdate(id, { $push: { players: userId } })
        .populate('players')
        .then((match) => res.json({ code: 200, match }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI team', err }))
})



module.exports = router;