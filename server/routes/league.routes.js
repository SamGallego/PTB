const router = require("express").Router();
const League = require('./../models/League.model')
const Match = require('./../models/Match.model')
const Team = require('./../models/Team.model')

router.get("/", (req, res, next) =>
    res.json({ message: "league" }))

/**
 * apuntar partidos a liga
 * panel para crea crear partidos de liga
 *      equipos apuntados   League.find({teeams: {teams._id}})
 *      crear matches *
 */


router.post('/create', (req, res) => {

    const { name, teams, matches, lat, lng, description, date, limit } = req.body
    
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    League
        .create({ name, teams, matches, location, description, date, limit})
        .then((league) => res.json({ code: 200, message: 'league created', league }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI league', err }))

})


router.get("/list", (req, res, next) => {

    League
        .find()
        .then((league) => res.json({ code: 200, league }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI league', err }))

})

router.get('/details/:id', (req, res) => {

    League
        .findById(req.params.id)
        .populate({path: 'teams', populate: {path: "players"}})
        .then((league) => res.json({ code: 200, league }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI league', err }))

})

router.post('/details/:id', (req, res) => {

    const { id } = req.params
    const { name, matches, lat, lng, date, limit, teams } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }


    League
        .findByIdAndUpdate(id, { name, matches, location, date, limit, teams })
        .then((league) => res.json({ code: 200, league }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI league', err }))
})


router.put('/details/:id/join', (req, res) => {

    const { id } = req.params
  
    Team.find({ players: req.session.currentUser._id})
    .then(team => {
   
        League
            .findByIdAndUpdate(id, { $push: { teams: team._id } })
            .populate('')
            .then((match) => res.json({ code: 200, match }))
            .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI league', err }))
    })


})

router.get('/:id/table', (req, res) => {

    League
        .findById(req.params.id)
        .populate("matches")
        .then((table) => res.json({ code: 200, table }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI league', err }))

})

router.get("/:id/matches/list", (req, res, next) => {

    League
        .findById(req.params.id)
        .populate("matches")
        .select("matches")
        .then((matches) => res.json({ code: 200, matches }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error YUKI YUKI YUKI league', err }))

})

router.delete('/details/:id', (req, res) => {
    const {
        id
    } = req.params

    League
        .findByIdAndDelete(id)
        .then(() => res.json({}))
        .catch(err => console.log(err))
})

module.exports = router;