const router = require("express").Router();

router.get("/", (req, res, next) =>
    res.json({message:"index"}))

module.exports = router;