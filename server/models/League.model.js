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
    date: {
        start: Date
    },
    limit: Number,
    table: [{
        type: Schema.Types.ObjectId, ref: 'Team',
        type: Schema.Types.ObjectId, ref: 'Match'
    }]
},
    {
        timestamps: true
    }
)

leagueSchema.index({ location: '2dsphere' })
const League = model("League", leagueSchema);

module.exports = League;