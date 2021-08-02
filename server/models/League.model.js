const { Schema, model } = require("mongoose");
const leagueSchema = new Schema({
    name: String,
    teams: [{
        type: Schema.Types.ObjectId, ref: 'Team'
    }],
    matches: [{
        type: Schema.Types.ObjectId, ref: 'Match'
    }],
    location: {
        city: String,
        address: String
    },
    description: String,
    date: Date,
    limit: Number
},
    {
        timestamps: true
    }
)

const League = model("League", leagueSchema);

module.exports = League;