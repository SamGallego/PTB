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
        type: { type: String },
        coordinates: [Number],
    },
    description: String,
    date: Date,
    limit: Number
},
    {
        timestamps: true
    }
)

leagueSchema.index({ location: '2dsphere' })
const League = model("League", leagueSchema);

module.exports = League;