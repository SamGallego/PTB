module.exports = app =>{
    app.use("/api",require("./base.routes"))
    app.use("/api/auth", require("./auth.routes"))
    app.use("/api/profile", require("./profile.routes"))
    app.use("/api/team",require("./team.routes"))
    app.use("/api/match", require("./match.routes"))
    app.use("/api/league", require("./league.routes"))
}

