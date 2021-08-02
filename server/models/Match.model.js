const { Schema, model } = require("mongoose");
const matchSchema = new Schema({
    name: String,
    teamA: {
        type: Schema.Types.ObjectId, ref: 'Team'
    },
    teamB: {
        type: Schema.Types.ObjectId, ref: 'Team'
    },
    playersA: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    playersB: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    capacity: Number,
    score: {
        teamA: Number,
        teamB: Number
    },
    location: {
        city: String,
        address: String
    },
    description: String,
    date: Date,
    owner: {
        type: Schema.Types.ObjectId, ref: 'User'
    }

},
    {
        timestamps: true
    }
)


const Match = model("Match", matchSchema);

module.exports = Match;